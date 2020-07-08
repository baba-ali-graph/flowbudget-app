import React, {useContext, useState} from 'react'
import AppContext from '../../store/AppContext'
import {ToggleHelp} from '../../actions/actions'

export default function(){
    let {store, dispatch} = useContext(AppContext)

    return(
        <div className='f-button button-help' onClick={e => dispatch(ToggleHelp())}>
            ?
        </div>
    )
}