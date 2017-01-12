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
            <li>{`${decodeURIComponent(tokenData.displayString)} (${decodeURIComponent(tokenData.kind)})`}</li>
        )
    }

    const depntDisplay = (tokenData) => {
        return (
            <li>{`${decodeURIComponent(tokenData.text)} (${decodeURIComponent(tokenData.kind)})`}</li>
        )
    }

    const dependencyDisplay = (depList) => {
        if (depList && depList.length > 0){
            return <ul>{depList.map(t => t.body).map(depDisplay)}</ul>
        }
        return <p>No dependencies to display!</p>
    }

    const dependentDisplay = (depList) => {
        if (depList && depList.length > 0){
            return <ul>{depList.map(depntDisplay)}</ul>
        }
        return <p>No dependents to display!</p>
        
    }


    return <div>
        <div>{tokenTypeDisplay(highlightedTokenData)}</div>
        <h2>Dependencies</h2>
        <div>{dependencyDisplay(dependencies)}</div>
        <h2>Dependents</h2>
        <div>{dependentDisplay(dependents)}</div>
    </div>
}