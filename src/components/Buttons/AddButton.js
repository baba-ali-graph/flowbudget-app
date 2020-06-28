import React, {useContext} from 'react'
import AddItem from '../actions/actions'
import AppContext from '../store/AppContext'

export default function(){
    let {store, dispatch} = useContext(AppContext)
    return (
        <div onClick={e => dispatch(AddItem())}className='button button-add'>
            +
        </div>
    )
}