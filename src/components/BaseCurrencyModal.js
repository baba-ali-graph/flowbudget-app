import React, {useState, useEffect, useContext} from 'react'
import {SET_BASE_CURRENCY} from '../actions/actions'
import AppContext from '../store/AppContext'
import {SetBaseCurrency} from '../actions/actions'
import {motion, AnimatePresence} from 'framer-motion'
import CurrencyPicker from './CurrencyPicker'
import {scaleUpDown} from '../animations/index'

export default function BaseCurrencyModal() {
    const [baseCurrency, setBaseCurrency] = useState()
    const {store, dispatch} = useContext(AppContext)

    useEffect(() => {
        setBaseCurrency('N')
        
    })

    function handleClickModalButton() {
        dispatch(SetBaseCurrency(baseCurrency))
    }
    return (
        <AnimatePresence>
            <motion.div
                className='modal'
                initial='start'
                animate='up'
                exit='down'
                variants={scaleUpDown}
                >
                    <div className='modal-content'>
                        <p> Would you like to use this as your base currency</p>
                        <CurrencyPicker currency={baseCurrency} />
                        
                    </div>

                    <div className='modal-actions'>
                    <button onClick={handleClickModalButton} className='btn ok-btn'>
                            OK
                        </button>
                    </div>
                </motion.div>
        </AnimatePresence>
    )
}


