import * as types from '../actions/types'
export const initialState = {
    currentBudget: {amount:30},
    currencyList: [],
    showHint: true
}

export const reducer = (state = {}, action) => {
    switch(action.type){
        // budget actions
        case types.CREATE_BUDGET:
            console.log('CREATE_BUDGET dispatched')
            return {...state}
        case types.OPEN_BUDGET:
            console.log('OPEN_BUDGET dispatched')
            return {...state}
        case types.SAVE_BUDGET:
            return {...state}
        case types.DELETE_BUDGET:
            return {...state}
        case types.UPDATE_BUDGET:
            let {field, value} = action.payload
            let {currentBudget} = state
            currentBudget = {...currentBudget, [field]: value}
            console.log(currentBudget)
            return {...state, currentBudget}
        
        // item actions
        case types.ADD_ITEM:
            return {...state}
        case types.SET_ITEM:
            return {...state}
        case types.DELETE_ITEM:
            return {...state}
        case types.UPDATE_ITEM:
            return {...state}
    }
}