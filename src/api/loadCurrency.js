import axios from 'axios'
import {FBG_LAST_UPDATED, FBG_CURRENCIES} from '../constants/index'
const currencyApi = 'https://currency.api.com'

export default async function loadCurrency () {
    let updateDue = isUpdateDue()
    if(updateDue) {
        try {
            let currency = await axios.get(currencyApi)
            localStorage.setItem(FBG_CURRENCIES, JSON.stringify(currency))
            return currency
        }
        catch(e) {
            handleAsyncErrors(e)
        }

    } 
}

function isUpdateDue(){
    let lastUpdated = localStorage.getItem(FBG_LAST_UPDATED)
    if (!lastUpdated)
        return true
    let today = new Date()
    return hasExpired(today, lastUpdated)
}


function hasExpired(today, lastUpdated) {
    let diffr = today - lastUpdated
    let inDays = diffr/(1000*60*60*24)
    return inDays >= 3 ?  true : false
}

function handleAsyncErrors(e){
    console.log(e)
}