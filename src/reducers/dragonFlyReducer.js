import * as a from '../actions/actions';

import {combineReducers} from 'redux';

export const selectedTokenTypeReducer = (selectedTokenType = {}, action) => {
    switch (action){
        case a.RECEIVE_TOKEN_TYPE:
            return action.tokenType
        default:
            return selectedTokenType;
    }
}

export const getSelectedTokenType = state => {
    return state.dragonFlyData.selectedTokenType;
}

// TODO: fill out
export const selectedTokenDependencies = (dependencies = [], action) => {
    switch(action){
        default:
        return dependencies;
    }
}

export const getSelectedTokenDependencies = state => {
    return state.dragonFlyData.tokenDependencies;
}

// TODO: fill out
export const selectedTokenDependents = (dependents = [], action) => {
    switch(action){
        default:
        return dependents;
    }
}

export const getSelectedTokenDependents = state => {
    return state.dragonFlyData.tokenDependents;
}



export const dragonFlyData = combineReducers({
    selectedTokenType: selectedTokenTypeReducer,
    tokenDependencies: selectedTokenDependencies,
    tokenDependents: selectedTokenDependents
})