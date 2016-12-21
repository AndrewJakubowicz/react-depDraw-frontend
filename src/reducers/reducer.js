import * as a from '../actions/actions';

import {dragonFlyData} from './dragonFlyReducer';

import {combineReducers} from 'redux';

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


// Todo: add file with another action.
const filePathHeadingsReducer = ( filePathHeadings, action) => {
    if (filePathHeadings === undefined) {
        return { filesList: [], currentFile: '' }
    }
    const {filesList, currentFile} = filePathHeadings;

    switch (action.type){
        case a.RECEIVE_INIT:
            return {
                currentFile: action.fileName,
                filesList: [...filesList, action.fileName]
            }
        default:
            return filePathHeadings
    }
}

export const getFilePathHeadings = (state) => {
    return state.openFilesList.filesList;
}

export const getCurrentFile = state => {
    return state.openFilesList.currentFile;
}


// Load in file text early.
const fileTextReducer = (currentFileText = '', action) => {
    switch (action.type){
        case a.RECEIVE_FILE_TEXT:
            return action.text;
        // Don't need plain text if we have tokens.
        case a.RECEIVE_FILE_TOKEN_DATA:
            return '';
        default:
            return currentFileText;
    }
}

export const getText = (state) => {
    return state.currentFileText;
}


export const rootReducer = combineReducers({
    tokenList: fileTokenReducer,
    openFilesList: filePathHeadingsReducer,
    currentFileText: fileTextReducer,
    dragonFlyData
});