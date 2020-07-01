import React, {useState, useContext} from 'react'
import AppContext from '../store/AppContext'
import {SetItem} from '../actions/actions'
import {isMobile, computePartialRemaining} from '../tools/index'

export default function(props){
    let {store, dispatch} = useContext(AppContext)
    let [priceState, setPriceState] = useState('')

    function handleName(e){
        let {value} = e.target
        let {_id} = props
        dispatch(SetItem({_id, field:'name', value})) 
    }

    function handleDelete(e){
        dispatch()
    }

    function handlePrice(e){
        let {value} = e.target
        let {_id} = props
        if(/[A-Za-z$%,!@]/.test(value) === true){ // !WARN: Temporary Fix
            setPriceState('error')
            console.log('error' + value)
        }
        else if(value === " ") {
            console.log('You entered nothing')
            setPriceState('warn')
        } else {
            let {settings, currentBudget} = store
            let partialRemaining = computePartialRemaining(currentBudget, props._id)
            let price = parseFloat(value)            
            price = Number.isNaN(price) ? 0 : price
            if(price > partialRemaining && settings.allowOverflow == false) {
                setPriceState('warn')
            }  else {
                setPriceState('')
                dispatch(SetItem({_id, field:'price', value: price}))
                }
        }
    }
    let {amount, currency} = store.currentBudget
    let percentage = parseInt((props.price/amount) * 100) // !WARN: Temporary fix

    return(
        <div className='item'>
            <div className='item-wrapper'>
                <input onChange={handleName} value={props.name} className='item-cell name-input'/>
                <input onChange={handlePrice} value={props.price} className={`item-cell price-input ${priceState}`}/>
                {!isMobile() && <span className='item-cell percent'>{percentage}% </span>}
                <div onClick={handleDelete} className='item-delete'></div>
            </div>
            <div className='size-indicator-wrapper'>
                <span className='size-indicator' style={{width:`${percentage}%`}}> </span>
                <span> {percentage}% </span> 
            </div>
        </div>
    )
}