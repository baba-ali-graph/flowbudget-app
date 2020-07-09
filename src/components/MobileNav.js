import React, {useState, useContext} from 'react'
import Budget from './Budget'
import AppContext from '../store/AppContext'
import {slideRightLeft, slideDownUp} from '../animations/index'
import {motion, AnimatePresence} from 'framer-motion'

export default function(){
        let {store, dispatch} = useContext(AppContext)
        let [navShow, toggleNav] = useState(false)
        let [listExpanded, setExpandList] = useState(false)

        let {currentBudget, budgets} = store
        function renderBudgets() {
            let filteredBudgets = []
            for(let budget of budgets){
                if(budget._id !== currentBudget._id){
                    filteredBudgets.push(<Budget key={budget._id} closeList={() => setExpandList(!listExpanded)} budget={budget} />)
                }
            }
            return filteredBudgets
        }
  
    return(
        <nav className='mobile-nav'> 
            <div onClick={() => toggleNav(!navShow)} className="mobile-nav__trigger"> T </div>
         <AnimatePresence>
            {navShow && <motion.div initial='start' animate='right' exit='left' variants={slideRightLeft} className='navbar'>
                <div className='navbar__top-wrapper'>
                    <div className='budget-wrapper'>
                        <h3> {currentBudget.title}</h3>
                        <span 
                            role='button'
                            className='expand-btn'
                            onClick={() => setExpandList(!listExpanded)}
                            > X </span>
                    </div>
                    <AnimatePresence>
                    {listExpanded && 
                        <motion.div 
                            initial='start' 
                            animate='down' 
                            exit='up' 
                            variants={slideDownUp}  
                            className='budget-list'> 
                                {renderBudgets()}
                         </motion.div> }
                    </AnimatePresence> 
                </div>
                <div className='navbar__action-wrapper'>
                    <div className='navbar__action'>
                        <span className='icon'></span>
                        <span className='title'>  New </span>
                    </div>

                    <div className='navbar__action'>
                        <span className='icon'></span>
                        <span className='title'>  Print </span>
                    </div>

                    <div className='navbar__action'>
                        <span className='icon'></span>
                        <span className='title'>  Sycnhronize </span>
                    </div>                   
                </div>
             </motion.div> }
         </AnimatePresence> 
        </nav>
    )
}