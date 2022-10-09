import React from 'react'
import './NoNotification.css'
import Icons from './icons'

function NoNotification(props){
    const {size = 'desktop',...rest} = props
    return (
        <div className={`div ${size}`}{...rest}>
            <image />         
        </div>
    )
}


export default NoNotification