import React from 'react'
import './style.css';

const AppInput = (props) => {

    const { ehModoNoturno } = props

    return <input className={`appInput ${ehModoNoturno && 'appInputNoturno'}`} {...props}/>
}


export default AppInput



