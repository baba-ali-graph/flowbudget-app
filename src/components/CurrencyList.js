import React, {useContext} from 'react'
import { UpdateBudget } from '../actions/actions'
import AppContext from '../store/AppContext'

export default function(){
    let {store, dispatch} = useContext(AppContext)
    let {currencyList} = store
    return(
        <span className='budget-currency__list'>
            {currencyList.map(currency => <span onClick={e => dispatch(UpdateBudget({field:'currency', value: currency}))} key={currency}> {currency} </span>)}
        </span>
    )
}