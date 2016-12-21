import React from 'react';


export const DragonFly = ({highlightedTokenData, dependencies, dependents}) => {
    
    return <div>
        <p>{highlightedTokenData ? JSON.stringify(highlightedTokenData): '...'}</p>
        <h2>Dependencies</h2>
        <p>{dependencies ? dependencies.toString() : '...no dependencies to show here...'}</p>
        <h2>Dependents</h2>
        <p>{dependents ? dependents.toString(): '...no dependents either...'}</p>
    </div>
}