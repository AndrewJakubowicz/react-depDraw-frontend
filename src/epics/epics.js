import * as Rx from 'rxjs';
import * as a from '../actions/actions';
import { combineEpics } from 'redux-observable';

import { parseEscaped } from '../util/jsonUtil';

const { ajax } = Rx.Observable;
const PORT = 8080

// Deals with stream for gettingFileTokens

export const getFileTokenEpic = action$ =>
        action$.ofType(a.FETCH_FILE_TOKEN_DATA)
            .mergeMap(action => {
                const stream1 = ajax.getJSON(`http://localhost:${PORT}/api/getFileText?filePath=${action.filePath}`)
                    .map(response => {
                        return decodeURIComponent(response.text)
                    })
                    .map(a.receiveFileText)
                    .takeUntil(action$.ofType(a.RECEIVE_FILE_TOKEN_DATA));

                const stream2 = ajax.getJSON(`http://localhost:${PORT}/api/getTextIdentifierTokensLocations?filePath=${action.filePath}`)
                    .map(tokenList => {
                        return tokenList.map(v => ({
                            ...v,
                            text: decodeURIComponent(v.text)
                        }))
                    })
                    .map(a.receiveFileTokens);
                return Rx.Observable.merge(stream1, stream2);
            })
            .takeUntil(action$.ofType(a.CANCEL_FETCH_FILE_TOKEN_DATA))
            .catch(err => {
                console.error(`Error in getTextIdentifierTokensLocations request: `, err);
                return Rx.Observable.empty();
            })


// Handles the init method.
export const handleInit = action$ => 
    action$.ofType(a.FETCH_INIT)
        .mergeMap(action =>
            ajax.getJSON(`http://localhost:${PORT}/api/init`)
            .map(decodeURIComponent)
            .map(a.receiveCurrentFileName)
        )

export const handleGetType = action$ =>
    action$.ofType(a.GET_TOKEN_TYPE)
        .throttleTime(200)
        .mergeMap(action =>
            ajax.getJSON(`http://localhost:${PORT}/api/getTokenType?filePath=${action.filePath}&line=${action.line}&offset=${action.offset}`)
                .filter(data => data.success)
                .map(response => {
                    console.log(response)
                    return response.body
                })
            .map(a.receiveTokenType)
        );

export const handleGetDeps = action$ =>
    action$.ofType(a.GET_TOKEN_DEPENDENCY)
        .mergeMap(action => 
            ajax.getJSON(`http://localhost:${PORT}/api/getTokenDependencies?filePath=${action.filePath}&line=${action.line}&offset=${action.offset}`)
                .map(a.receiveTokenDependency)
        )

export const handleGetDepnts = action$ =>
    action$.ofType(a.GET_TOKEN_DEPENDENTS)
        .mergeMap(action => 
            ajax.getJSON(`http://localhost:${PORT}/api/getTokenDependents?filePath=${action.filePath}&line=${action.line}&offset=${action.offset}`)
                .map(a.receiveTokenDependents)
        )

export const rootEpic = combineEpics(
    getFileTokenEpic,
    handleInit,
    handleGetType,
    handleGetDeps,
    handleGetDepnts
)