import React, {useContext} from 'react'
import {AddItem} from '../../actions/actions'
import AppContext from '../../store/AppContext'

export default function(){
    let {store, dispatch} = useContext(AppContext)
    return (
        <div onClick={e => dispatch(AddItem())}className='f-button button-add'>
            +
        </div>
    )
}