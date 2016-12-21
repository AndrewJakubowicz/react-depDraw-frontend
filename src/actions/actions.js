
const FETCH_FILE_TOKEN_DATA = 'FETCH_FILE_TOKEN_DATA';
const CANCEL_FETCH_FILE_TOKEN_DATA = 'CANCEL_FETCH_FILE_TOKEN_DATA';
const RECEIVE_FILE_TOKEN_DATA = 'RECEIVE_FILE_TOKEN_DATA';


export const fetchFileTokens = () => ({
    type: FETCH_FILE_TOKEN_DATA
});

export const receiveFileTokens = (tokenList) => ({
    type: RECEIVE_FILE_TOKEN_DATA,
    tokenList
});

export const cancelFetchTokens = () => ({
    type: CANCEL_FETCH_FILE_TOKEN_DATA
});
