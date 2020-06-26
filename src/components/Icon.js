import React from 'react'

export default function({icon, size}){
    return(
        <span className={`mdi mdi-${icon} mdi-${size}`}></span>
    )
}