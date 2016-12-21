import * as Rx from 'rxjs';
import * as a from '../actions/actions';

const { ajax } = Rx.Observable;

export const getFileTokenEpic = action$ =>
    action$.ofType(a.FETCH_FILE_TOKEN_DATA)
            .mergeMap(action => 
                ajax.getJSON(`http://localhost:8080/api/getTextIdentifierTokensLocations?filePath=${action.filePath}`)
                    .map(a.receiveFileTokens)
                    )
            .catch(err => {
                console.error(`Error in getTextIdentifierTokensLocations request: `, err);
                return Rx.Observable.empty();
                })