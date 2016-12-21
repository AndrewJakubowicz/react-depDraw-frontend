import React from 'react';


export const DragonFly = ({highlightedTokenData, dependencies, dependents}) => {
    
    return <div>
        <p>{highlightedTokenData.toString()}</p>
        <h2>Dependencies</h2>
        <p>{dependencies.toString()}</p>
        <h2>Dependents</h2>
        <p>{dependents.toString()}</p>
    </div>
}