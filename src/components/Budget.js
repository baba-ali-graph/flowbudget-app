import React, {useContext} from 'react'
import {OpenBudget, DeleteBudget} from '../actions/actions'
import AppContext from '../store/AppContext'

function Budget({budget, closeList}) {
    let {_, dispatch} = useContext(AppContext)
    let {_id, title, timestamp} = budget
    function openBudget(){
        closeList()
        dispatch(OpenBudget(_id))
    }

    function handleDeleteClick(e){
        e.stopPropagation()
        dispatch(DeleteBudget(_id))
    }

    return (
        <li onClick={openBudget} className='budget'>
            <div className='budget__title-wrapper'>
                <h3> {title}</h3>
                <div role='button'onClick={handleDeleteClick} className='btn close-btn'> X </div>
            </div>
            <div className='budget__timestamp'>
                <small> {timestamp.toDateString()} </small>
            </div>
        </li>    
    )
}

export default Budget



