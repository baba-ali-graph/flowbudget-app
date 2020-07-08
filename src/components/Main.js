import React from 'react'
import DocBar from './DocBar'
import Sidebar from './Sidebar'
import ActionBar from './ActionBar'
import ItemList from './ItemList'
import AddButton from './Buttons/AddButton'
import Notification from './Notification'
import MobileNav from './MobileNav'

export default function (){
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