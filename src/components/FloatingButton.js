import React from 'react'
import {AppContext} from '../store/appContext.js'

export default function (props) {
    function handler() {
        console.log("A non-expert real hope is convieneient")
        props.action()
    }
    return (
        <div 
            className={`f-button mdi mdi-${icon}` }
            onClick={handler}
            style={props.position}
            >
            </div>
    )
}