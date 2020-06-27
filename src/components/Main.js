import React from 'react'
import Sidebar from './Sidebar'
import ItemList from './ItemList'

export default function (){
    return(
        <section className='main-app'>
            <Sidebar />
            <div className='content-wrapper'>
                <ItemList />
            </div>
        </section>
    )
}