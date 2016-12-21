import * as Redux from 'redux';

import * as a from '../actions/actions';

import {combineReducers} from 'redux';

import * as Immutable from 'immutable';


// State required in the app.
// file.ts -> all the tokens.
// map of file -> tokens
const fileTokenReducer = (tokenList = [], action) => {
    switch (action.type){
        case a.RECEIVE_FILE_TOKEN_DATA:
            return action.tokenList;
        default:
            return tokenList;
    }
}

export const getFileTokens = (state) => {
    return state.tokenList;
}


export const rootReducer = combineReducers({
    tokenList: fileTokenReducer
});