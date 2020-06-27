import * as types from '../actions/types'
import uuid from 'uuid'
export const initialState = {
    currentBudget: {
        amount:3000,
        used: 1300,
        remaining: 1700,
        currency: 'N',
        items: [
            {_id:uuid.v4(), name: 'rice', price: 600},
            {_id:uuid.v4(), name: 'beans', price: 400},
            {_id:uuid.v4(), name: 'tomatoes', price: 300}
        ]
        },
    currencyList: ['N', 'USD', 'F', 'E'],
    showHint: true
}

export const reducer = (state = {}, action) => {
    let {currentBudget} = state
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
            currentBudget = {...currentBudget, [field]: value}
            console.log(currentBudget)
            return {...state, currentBudget}
        // item actions
        case types.ADD_ITEM:
            let newItem = {_id:uuid.v4(), name:'', price: 0}
            currentBudget.items.push(newItem)
            return {...state, ...currentBudget}
        case types.SET_ITEM:
            currentBudget.items = currentBudget.items.map(item => {
                if(item._id === action.payload._id){
                    item[action.payload.field] =  action.payload.value
                }
                return item
            })
            return {...state, ...currentBudget}
        case types.DELETE_ITEM:
            return {...state}
        case types.UPDATE_ITEM:
            return {...state}
    }
}