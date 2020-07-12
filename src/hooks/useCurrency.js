import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {FBG_LAST_UPDATED, FBG_CURRENCIES} from '../constants/index'
const currencyApi = 'https://currency.api.com'

export default function useCurrency(){
    let [currencies, setCurrencies] = useState(null)
    let [hasNetworkErrors, setErrors] = useState(false)
    let [isStale, setStaleness] = useState(null)
    useEffect(() => {
        async function loadCurrencyInit(){
            let currencies = await loadCurrency()
            let isStale = isUpdateDue()
            if(currencies === null){
                setErrors(true)
                return
            }
            if(isStale){
                setStaleness(isStale)
            }
            setCurrencies(currencies)
        }

        loadCurrencyInit()
    }, [])
    
    return [currencies, isStale, hasNetworkErrors]


} 


async function loadCurrency () {
    let updateDue = isUpdateDue()
    if(updateDue !== false) {
        try {
            let currencies = await axios.get(currencyApi)
            localStorage.setItem(FBG_CURRENCIES, JSON.stringify(currencies))
            return currencies
        }
        catch(e) {
            handleAsyncErrors(e)
            return null
        }

    } 
}

function isUpdateDue(){
    let lastUpdated = localStorage.getItem(FBG_LAST_UPDATED)
    if (!lastUpdated)
        return true
    let today = new Date()
    let diffr = today - lastUpdated
    let inDays = diffr/(1000*60*60*24)
    return inDays >= 3 ?  false : inDays
}

function handleAsyncErrors(e){
    console.log(e)
}