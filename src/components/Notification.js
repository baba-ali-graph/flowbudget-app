import React, {useContext, useEffect} from 'react'
import AppContext from '../store/AppContext'
import {HideNotification} from '../actions/actions'

export default function(){
    let {store, dispatch} = useContext(AppContext)
    let {notification} = store

    useEffect(() => {
        function hideNotification() {
            if(notification)
                dispatch(HideNotification())
        }

        setTimeout(hideNotification, 40000)
    }, [notification])

    return(
        <>
        {notification &&
        <div className={`notification notification--${notification.type}`}>
            <span className={`notification__icon mdi mdi-${notification.type}`}/>
            <span className='notification__msg'> {notification.msg} </span>
            <span className='notification__delete-btn'> X </span>
        </div>
        }
        </>
    )
}