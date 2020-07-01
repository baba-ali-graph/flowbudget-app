import * as types from '../actions/types'
import {computeValues} from '../tools/index'
import uuid from 'uuid'

export const initialState = {
    budgets: [],
    currentBudget: {
        amount:2000,
        used: 0,
        timestamp: new Date(),
        remaining: 2000,
        currency: 'N',
        items: [
            {_id:uuid.v4(), name: 'rice', price: 600},
            {_id:uuid.v4(), name: 'beans', price: 400},
            {_id:uuid.v4(), name: 'tomatoes', price: 300}
        ]
        },
    currencyList: ['N', 'USD', 'F', 'E'],
    showHint: true,
    settings: {
        allowOverflow: false,
        darkTheme: false,
        fontSize: 16,
        hideSidebar: false
    }
}

export const reducer = (state = {}, action) => {
    let {currentBudget} = state
    switch(action.type){
        // budget actions
        case types.CREATE_BUDGET:
            console.log('CREATE_BUDGET dispatched')
            return {...state}


        case types.OPEN_BUDGET:
            currentBudget = state.budgets.find(budget => budget._id == action.payload)
            return {...state, ...currentBudget}


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
            let items = currentBudget.items.map(item => {
                if(item._id === action.payload._id){
                    item[action.payload.field] =  action.payload.value
                }
                return item
            })
            currentBudget = {...currentBudget, items}
            if(action.payload.field === 'price') {
                console.log(typeof action.payload.value)
                let used = currentBudget.items.reduce((sum, item) => sum + item.price, 0)
                console.log('used', used)
                let remaining = currentBudget.amount - used
                console.log('remaining', remaining)
                currentBudget = {...currentBudget, used, remaining}
                console.log(currentBudget)
            }

            return {...state, currentBudget}


        case types.DELETE_ITEM:
            return {...state}
        case types.UPDATE_ITEM:
            return {...state}
    }
}