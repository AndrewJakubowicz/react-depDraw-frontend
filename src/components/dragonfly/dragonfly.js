import React from 'react';


export const DragonFly = ({highlightedTokenData, dependencies, dependents}) => {

    const tokenTypeDisplay = (tokenData) => {
        if (!tokenData.displayString){
            return <p>Click on a token for information!</p>
        }
        return (
            <div>
                <p>{decodeURIComponent(tokenData.displayString)}</p>
                <p>{`Type: ${decodeURIComponent(tokenData.kind)}`}</p>
            </div>
        )
    }

    const depDisplay = (tokenData) => {
        return (
            <div>
                <p>{`${decodeURIComponent(tokenData.displayString)} (${decodeURIComponent(tokenData.kind)})`}</p>
            </div>
        )
    }

    const depntDisplay = (tokenData) => {
        return (
            <div>
                <p>{`${decodeURIComponent(tokenData.text)} (${decodeURIComponent(tokenData.kind)})`}</p>
            </div>
        )
    }

    const dependencyDisplay = (depList) => {
        return <div>{depList.map(t => t.body).map(depDisplay)}</div>
    }

    const dependentDisplay = (depList) => {
        return <div>{depList.map(depntDisplay)}</div>
    }


    return <div>
        <p>{tokenTypeDisplay(highlightedTokenData)}</p>
        <h2>Dependencies</h2>
        <p>{dependencies ? (dependencyDisplay(dependencies)) : '...no dependencies to show here...'}</p>
        <h2>Dependents</h2>
        <p>{dependentDisplay(dependents)}</p>
    </div>
}