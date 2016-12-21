

export const CANCEL_ASYNC_OPERATIONS = 'CANCE_ASYNC_OPERATIONS';

/**
 * START getTextIdentifierTokensLocations method actions
 */
export const FETCH_FILE_TOKEN_DATA = 'FETCH_FILE_TOKEN_DATA';
export const CANCEL_FETCH_FILE_TOKEN_DATA = 'CANCEL_FETCH_FILE_TOKEN_DATA';
export const RECEIVE_FILE_TOKEN_DATA = 'RECEIVE_FILE_TOKEN_DATA';
export const RECEIVE_FILE_TEXT = 'RECEIVE_FILE_TEXT';


export const fetchFileTokens = filePath => ({
    type: FETCH_FILE_TOKEN_DATA,
    filePath
});

export const receiveFileText = text => ({
    type: RECEIVE_FILE_TEXT,
    text
});


export const receiveFileTokens = tokenList => {
    return {
    type: RECEIVE_FILE_TOKEN_DATA,
    tokenList
}};

export const cancelFetchTokens = () => ({
    type: CANCEL_FETCH_FILE_TOKEN_DATA
});

/**
 * END getTextIdentifierTokensLocations method
 */

/**
 * START init method actions
 */
export const FETCH_INIT = 'INIT';
export const RECEIVE_INIT = 'RECEIVE_INIT';

export const Init = _ => ({
    type: FETCH_INIT
});

export const receiveCurrentFileName = fileName => ({
    type: RECEIVE_INIT,
    fileName
})

/**
 * END init method actions
 */


/**
 * START getTokenType method actions
 */

export const GET_TOKEN_TYPE = 'GET_TOKEN_TYPE';
export const RECEIVE_TOKEN_TYPE = 'RECEIVE_TOKEN_TYPE';

export const getTokenType = (filePath, line, offset) => ({
    type: GET_TOKEN_TYPE,
    filePath,
    line,
    offset
});

export const receiveTokenType = (tokenType) => ({
    type: RECEIVE_TOKEN_TYPE,
    tokenType
});

/**
 * END getTokenType method actions
 */


export const GET_TOKEN_DEPENDENCY = 'GET_TOKEN_DEPENDENCY';
export const RECEIVE_TOKEN_DEPENDENCY = 'RECEIVE_TOKEN_DEPENDENCY';

export const getTokenDependency = (filePath, line, offset) => ({
    type: GET_TOKEN_DEPENDENCY,
    filePath,
    line,
    offset
});

export const receiveTokenDependency = (tokenDependencies) => ({
    type: RECEIVE_TOKEN_DEPENDENCY,
    tokenDependencies
});


export const GET_TOKEN_DEPENDENTS = 'GET_TOKEN_DEPENDENTS';
export const RECEIVE_TOKEN_DEPENDENTS = 'RECEIVE_TOKEN_DEPENDENTS';

export const getTokenDependents = (filePath, line, offset) => ({
    type: GET_TOKEN_DEPENDENTS,
    filePath,
    line,
    offset
});

export const receiveTokenDependents = (tokenDependents) => ({
    type: RECEIVE_TOKEN_DEPENDENTS,
    tokenDependents
});