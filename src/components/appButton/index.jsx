import React from 'react'
import './style.css';

const AppButton = (props) => {

    const { ehModoNoturno } = props

    return <button className={`appButton ${ehModoNoturno && 'appButtonNoturno'}`} {...props}/>

}


export default AppButton



