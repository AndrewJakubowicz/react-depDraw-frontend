
export const FETCH_FILE_TOKEN_DATA = 'FETCH_FILE_TOKEN_DATA';
export const CANCEL_FETCH_FILE_TOKEN_DATA = 'CANCEL_FETCH_FILE_TOKEN_DATA';
export const RECEIVE_FILE_TOKEN_DATA = 'RECEIVE_FILE_TOKEN_DATA';


export const fetchFileTokens = filePath => ({
    type: FETCH_FILE_TOKEN_DATA,
    filePath
});

export const receiveFileTokens = tokenList => {
    return {
    type: RECEIVE_FILE_TOKEN_DATA,
    tokenList
}};

export const cancelFetchTokens = () => ({
    type: CANCEL_FETCH_FILE_TOKEN_DATA
});
