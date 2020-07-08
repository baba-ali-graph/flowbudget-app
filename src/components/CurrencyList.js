import React, {useContext} from 'react'
import { UpdateBudget } from '../actions/actions'
import AppContext from '../store/AppContext'

export default function(props){
    let {store, dispatch} = useContext(AppContext)
    let {currencyList} = store
    return(
        <span className='budget-currency__list'>
            {currencyList.map(currency => <span onClick={e => props.handleCurrencyClick(currency)} key={currency}> {currency} </span>)}
        </span>
    )
}