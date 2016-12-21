import * as Redux from 'redux';

import * as a from '../actions/actions';

import * as Immutable from 'immutable';


// State required in the app.
// file.ts -> all the tokens.
// map of file -> tokens
const fileTokenReducer = (state = { tokenList: [] }, action) => {
    switch (action.type){
        case a.RECEIVE_FILE_TOKEN_DATA:
            return {
                tokenList: action.tokenList
            };
        default:
            return state;
    }
}

// export const rootReducer = Redux.combineReducers(fileTokenReducer);
export const rootReducer = fileTokenReducer;