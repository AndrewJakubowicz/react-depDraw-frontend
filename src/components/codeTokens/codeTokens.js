import React from 'react';

export const CodeTokens = ({ filePath, backupText, tokenList, onTokenClick }) => {
    // Allows quick load of text.
    if (backupText !== ''){
        return <span style={{color: '#6f737a'}}>{backupText}</span>
    }

    // Loads in the tokens
    const modifiedList = tokenList && tokenList.length > 0
        ?
        tokenList.map((token, i) => {
            return <span key={Math.random() * Math.random()} onClick={()=>onTokenClick(token.start, filePath)}>{token.text}</span>
        })
        :
        '...';

    return <span>{modifiedList}</span>
}

