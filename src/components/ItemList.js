import React, {useContext} from 'react'
import Item from './Item'
import AppContext from '../store/AppContext'
import {isMobile} from '../tools/index'

export default function(){
    let {store, dispatch} = useContext(AppContext)
    let {currentBudget} = store
    return (
        <div className='itemlist'>
            <div className='itemlist__title'>
                <span> Name </span>
                <span> Price</span>
                {!isMobile && <span> Percent </span>}
            </div>
            {currentBudget.items.map(item => (
                <Item 
                    key={item._id}
                    _id={item._id}
                    price={item.price}
                    name={item.name}
                    />
            ))}
        </div>
    )
}