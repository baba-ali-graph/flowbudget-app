import React, {useState, useContext} from 'react'
import AppContext from '../store/AppContext'
import Budget from './Budget'
import {CreateBudget, OpenBudget, DeleteBudget, ToggleHelp} from '../actions/actions'
import {slideDownUp} from '../animations/index'
import {motion, AnimatePresence} from 'framer-motion'


// WARN !: Feature not working properly. ISSUE: ! The list of items fails to render, I don't know why :(
export default function(){
    let {store, dispatch} = useContext(AppContext)
    let [listShow, setListShow] = useState(false)
    let {budgets, currentBudget} = store
    function renderBudgets() {
          let filteredBudgets = []
          for(let budget of budgets){
              if(budget._id !== currentBudget._id){
                  filteredBudgets.push(<Budget key={budget._id} closeList={() => setListShow(!listShow)} budget={budget} />)
              }
          }
          return filteredBudgets
    }

    function renderExpandButton() {
        if(budgets.length > 1)
            return (<span 
                onClick={() => setListShow(!listShow)}
                style={{color:'white'}} 
                className={`budg__expand-btn ${listShow ? 'icon-up': 'icon-down'}`}>   
                    E
                </span>)
    }
    return(
        <div className='budg'>
             <div className='budg__title'>
			    <h1> Untitled {renderExpandButton()}</h1>
		    	{listShow && <AnimatePresence> <motion.div initial='start' animate='down' exit='up' variants={slideDownUp} className='budget-list'>
		     	 {renderBudgets()}
			     </motion.div>
                 </AnimatePresence>}
                </div>
            </div>
        )
    }