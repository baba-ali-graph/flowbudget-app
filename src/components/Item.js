import React, {useState, useContext} from 'react'
import AppContext from '../store/AppContext'
import {SetItem} from '../actions/actions'
import {isMobile, formatPrice} from '../tools/index'

export default function(props){
    let {store, dispatch} = useContext(AppContext)

    function handleName(e){
        let {value} = e.target
        let {_id} = props
        dispatch(SetItem({_id, field:'name', value})) 
    }

    function handlePrice(e){
        let {value} = e.target
        let {_id} = props
        dispatch(SetItem({_id, field:'price', value})) 
    }
    let {amount, currency} = store.currentBudget
    let percentage = parseInt((props.price/amount) * 100) // WARN: Temporary fix

    return(
        <div className='item'>
            <div className='item-wrapper'>
                <input onChange={handleName} value={props.name} className='item-cell name-input'/>
                <input onChange={handlePrice} value={props.price} className='item-cell price-input'/>
                {!isMobile() && <span className='item-cell percent'>{percentage}% </span>}
            </div>
            <div className='size-indicator-wrapper'>
                <span className='size-indicator' style={{width:`${percentage}%`}}> </span>
                <span> {percentage}% </span> 
            </div>
        </div>
    )
}