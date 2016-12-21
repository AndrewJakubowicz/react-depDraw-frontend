import * as Redux from 'redux';

import * as a from '../actions/actions';

import * as Immutable from 'immutable';


// State required in the app.
// file.ts -> all the tokens.
// map of file -> tokens
const fileTokenReducer = (state = [], action) => {
    switch (action.type){
        case a.RECEIVE_FILE_TOKEN_DATA:
            return action.tokenList
        default:
            return []
    }
}

// export const rootReducer = Redux.combineReducers(fileTokenReducer);
export const rootReducer = fileTokenReducer;