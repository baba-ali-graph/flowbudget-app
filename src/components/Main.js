import React, {useContext, useEffect} from 'react'
import DocBar from './DocBar'
import Sidebar from './Sidebar'
import ActionBar from './ActionBar'
import ItemList from './ItemList'
import AddButton from './Buttons/AddButton'
import Notification from './Notification'
import MobileNav from './MobileNav'
import {CURRENCIES_err} from '../messages'
import {SetNotification} from '../actions/actions'
import useCurrency from '../hooks/useCurrency'
import AppContext from '../store/AppContext'

export default function (){
    let {store, dispatch} = useContext(AppContext)
    const [currencies, isStale, hasNetworkErrors] = useCurrency()
    useEffect(()=> {
        if(hasNetworkErrors){
            dispatch(SetNotification({type:"error", msg: CURRENCIES_err}))
            console.log(hasNetworkErrors)
        }
    }, [currencies, isStale, hasNetworkErrors])
    return(
        <section className='main-app'>
            <Sidebar />
            <main className='main-wrapper'>
                <Notification />
                <DocBar />
                <MobileNav/>
                <ItemList />
                <ActionBar />
                <AddButton />
            </main>
        </section>
    )
}