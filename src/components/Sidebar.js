import React, {useContext, useState} from 'react'
import Icon from './Icon'
import Hint from './Hint'
import CurrencyList from './CurrencyList'
import AppContext from '../store/AppContext'
import {currFormat} from '../tools/index'
import {UpdateBudget} from '../actions/actions'
import {motion} from 'framer-motion'
import{slideRight} from '../animations/index'

export default function(){
    let {store, dispatch} = useContext(AppContext)
    let [showCurrencyList, toggleShowCurrencyList]= useState(false)
    let {currentBudget} = store 
    let level = currentBudget.remaining < 0.1 * currentBudget.amount ? 'low' : ''
    
    function handleCurrencyClick(currency){
        dispatch(UpdateBudget({field:"currency", value: currency}))
        toggleShowCurrencyList(!showCurrencyList)
    }
    return(
        <motion.div initial={slideRight.initial} animate={slideRight.animation}  className='sidebar'>
            <div className='budget'>
                <span className='budget-currency'>   
                    <span 
                        onClick={e => toggleShowCurrencyList(!showCurrencyList)}
                        className='budget-currency__field'> {currentBudget.currency} <Icon icon='arrow-down'/> </span>
                    {showCurrencyList && <CurrencyList handleCurrencyClick={handleCurrencyClick} />}
                </span>
                <input className='budget__amount' placeholder="Budget Amount" value={currentBudget.amount} onChange={e => dispatch(UpdateBudget({field: 'amount', value: e.target.value})) }  />
            </div>

            <div className='used content-wrapper'>
                <div className='used title'> Used: </div>
    <h2 className='used value'> {currentBudget.currency}{currFormat(currentBudget.used)} </h2>
            </div>


            <div className='remaining content-wrapper'>
                <div className='remaining title'> Remaining: </div>
    <h2 className={`remaining value ${level}`}> {currentBudget.currency}{currFormat(currentBudget.remaining)} </h2>
            </div>

            <div className='button new-budget mdi mdi-plus'> 
                <span> + </span> <Hint message="Creates a  new budget" /> 
                </div>
        </motion.div>
    )
}