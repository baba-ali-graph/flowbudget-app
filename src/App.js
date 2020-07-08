import React, {useReducer, useContext, createContext} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './components/Main'
import Chart from './components/Chart'
import './styles/index.sass'
import './styles/sidebar.sass'
import {reducer, initialState} from './reducer/index'
import AppContext from './store/AppContext'


export default function App(){
    const [store, dispatch] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value={{store, dispatch}}>
        <BrowserRouter >
            <Switch>
                <Route path="/chart" component={Chart}/>
                <Route path="/app" component={Main}/>
            </Switch>
        </BrowserRouter>
        </AppContext.Provider>
    )
}