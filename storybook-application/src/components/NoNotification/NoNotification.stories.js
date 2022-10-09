import React, { Component } from "react";
import NoNotification from './NoNotification'

export default{
    title:'NoNotification',
    component:NoNotification
}

export const Desktop = () => <NoNotification size = 'desktop'/>
export const Mobile = () => <NoNotification size = 'mobile'/>