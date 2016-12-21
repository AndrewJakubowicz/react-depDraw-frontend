import React from 'react';
import * as Immutable from 'immutable';

export const CodeTokens = ({ tokenList, onTokenClick }) => {
    const modifiedList = tokenList && tokenList.length > 0
        ?
        tokenList.map((token, i) => {
            return <span key={Math.random() * Math.random()} onClick={()=>onTokenClick(token.start)}>{token.text}</span>
        })
        :
        '...';

    return <span>{modifiedList}</span>
}

