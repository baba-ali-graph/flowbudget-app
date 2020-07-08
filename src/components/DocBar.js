import React, {useContext, useState} from 'react'
import AppContext from '../store/AppContext'
import BudgetManager from './BudgetManager'
import {CreateBudget, DeleteBudget, ToggleHelp} from '../actions/actions'


export default function(){
	let {store, dispatch} = useContext(AppContext)
	let [showList, setListShow] = useState(false)
	let [showBar, setShowBar] = useState('hide')
	
	return(
		<nav className='docbar'>
				 <div className="docbar__wrapper">
					<BudgetManager />
					<div className='docbar__actions'>
						<span onClick={e => dispatch(CreateBudget())} className='docbar__action'> + </span>
						<span onClick={e => dispatch(ToggleHelp())} className='docbar__action'> ? </span>
						<span onClick={e => dispatch(DeleteBudget())} className='docbar__action'> - </span>
					</div>
				</div>
		</nav>
	)
}