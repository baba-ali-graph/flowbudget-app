import React from 'react'
import TitleBar from './TitleBar'
import Sidebar from './Sidebar'
import ItemList from './ItemList'
// import AddButton from './Buttons/AddButton.'

export default function (){
    return(
        <section className='main-app'>
            <Sidebar />
            <div className='content-wrapper'>
                <TitleBar />
                <ItemList />
            </div>
            {/* <AddButton /> */}
        </section>
    )
}