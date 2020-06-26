import React, { useEffect, useContext } from 'react'
import AppContext from '../store/AppContext'

export default function(props){
    let {store, dispatch} = useContext(AppContext)
    let {showHint} = store
 
    return(
        <>
        {showHint && <div className='hint'> {props.message} </div>}
        </>
    )
}