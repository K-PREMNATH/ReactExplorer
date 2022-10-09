import React from 'react'
import './NoNotification.css'

function NoNotification(props){
    const {size = 'desktop',...rest} = props
    return (
        <div className={`div ${size}`}{...rest}>

        </div>
    )
}


export default NoNotification