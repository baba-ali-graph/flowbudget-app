import React, {useContext} from 'react'
import AppContext from '../store/AppContext'

export default function ActionBar() {
    let {store, dispatch} = useContext(AppContext)
    return(
        <div className='action-bar'>
            <div onClick={e => console.log('an action')} className='actionbar__action'> A </div>
            <div onClick={e => console.log('an action')} className='actionbar__action'> B </div>
            <div onClick={e => console.log('an action')} className='actionbar__action'> C </div>
        </div>

    )
}
