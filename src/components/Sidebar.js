import React, {useContext, useState} from 'react'
import Icon from './Icon'
import Hint from './Hint'
import CurrencyList from './CurrencyList'
import AppContext from '../store/AppContext'
import {UpdateBudget} from '../actions/actions'

export default function(){
    let {store, dispatch} = useContext(AppContext)
    let [showCurrencyList, toggleShowCurrencyList]= useState(false)
    let {currentBudget} = store 
    let level = currentBudget.remaining < 0.1 * currentBudget.amount ? 'low' : ''
    return(
        <aside className='sidebar'>
            <div className='budget'>
                <span className='budget-currency'>   
                    <span 
                        onClick={e => toggleShowCurrencyList(!showCurrencyList)}
                        className='budget-currency__field'> {currentBudget.currency} N <Icon icon='arrow-down'/> </span>
                    {showCurrencyList && <CurrencyList />}
                </span>
                <input className='budget__amount' placeholder="Budget Here" onChange={e => dispatch(UpdateBudget({field: 'amount', value: e.target.value})) }  />
            </div>

            <div className='used content-wrapper'>
                <div className='used title'> Used: </div>
                <h2 className='used value'> {currentBudget.used} N400</h2>
            </div>


            <div className='remaining content-wrapper'>
                <div className='remaining title'> Remaining: </div>
                <h2 className={`remaining value ${level}`}> {currentBudget.remaining} N300</h2>
            </div>

            <div className='button new-budget mdi mdi-plus'> 
                <span> + </span> <Hint message="New Budget" /> 
                </div>
        </aside>
    )
}