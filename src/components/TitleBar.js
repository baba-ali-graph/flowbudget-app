import React, {useContext, useState} from 'react'
import AppContext from '../store/AppContext'
import {OpenBudget} from '../actions/actions'
import {slideDown} from '../animations/index'
import {motion} from 'framer-motion'

export default function(){
    let {store, dispatch} = useContext(AppContext)
    let [showList, setListShow] = useState(false)
    function renderBudgets() {
        console.log('rendering saved budgets')
        let budgets = [{_id:'untitled 1'}, {_id:'untitled 2'}, {_id:'untitle N'}]
    return budgets.map(budget => <div key={budget._id} onClick={e => dispatch(OpenBudget(budget._id))} className='file__item'> <div> {budget._id} </div> <div className='file__timestamp'> 2 days ago</div> </div>)
    }
    return(
        <nav className='titlebar'>
            <div className='row'>
                <div className='titlebar__title'>
                    <h1> Untitled  <span onClick={e => setListShow(!showList)} className='expand-button'> Ex</span></h1>
                    {showList && <motion.div initial={slideDown.initial} animate={slideDown.animation} className='file-list'>
                        {renderBudgets()}
                    </motion.div>}
                </div>

                <div className='titlebar__actions'>
                    <span className='action-tab'> A </span>
                    <span className='action-tab'> D </span>
                </div>
            </div>
        </nav>
    )
}