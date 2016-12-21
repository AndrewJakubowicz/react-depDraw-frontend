import * as Rx from 'rxjs';
import * as a from '../actions/actions';
import { combineEpics } from 'redux-observable';

import { parseEscaped } from '../util/jsonUtil';

const { ajax } = Rx.Observable;

// Deals with stream for gettingFileTokens
export const getFileTokenEpic = action$ =>
    action$.ofType(a.FETCH_FILE_TOKEN_DATA)
            .mergeMap(action => 
                ajax.getJSON(`http://localhost:8080/api/getTextIdentifierTokensLocations?filePath=${action.filePath}`)
                    .map(tokenList => {
                        return tokenList.map(v => ({
                            ...v,
                            text: decodeURIComponent(v.text)
                        }))
                    })
                    .map(a.receiveFileTokens)
                    .takeUntil(action$.ofType(a.CANCEL_FETCH_FILE_TOKEN_DATA))
                    )
            .catch(err => {
                console.error(`Error in getTextIdentifierTokensLocations request: `, err);
                return Rx.Observable.empty();
                });

// Handles the init method.
export const handleInit = action$ => 
    action$.ofType(a.FETCH_INIT)
        .mergeMap(action =>
            ajax.getJSON(`http://localhost:8080/api/init`)
            .map(decodeURIComponent)
            .map(a.receiveInit)
        )

export const rootEpic = combineEpics(
    getFileTokenEpic,
    handleInit
)