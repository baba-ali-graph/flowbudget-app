import React, {useContext, useEffect} from 'react'
import AppContext from '../store/AppContext'
import {HideNotification} from '../actions/actions'
import {scaleUpDown} from '../animations/index'
import {motion, AnimatePresence} from 'framer-motion'

export default function(){
    let {store, dispatch} = useContext(AppContext)
    let {notification} = store

    useEffect(() => {
        function hideNotification() {
            if(notification)
                dispatch(HideNotification())
        }

        setTimeout(hideNotification, 4000)
    }, [notification])

    return(
        <AnimatePresence>
        {notification &&
        <motion.div
            initial='start'
            animate='up'
            exit='down'
            variants={scaleUpDown}
            className={`notification notification--${notification.type}`}>
            <span className={`notification__icon mdi mdi-${notification.type}`}/>
            <span className='notification__msg'> {notification.msg} </span>
            <span className='notification__delete-btn'> X </span>
        </motion.div>
        }
        </AnimatePresence>
    )
}