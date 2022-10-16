import React from 'react'
import './style.css';

const AppInput = (props) => {

    const { ehModoNoturno, ...outrasPropriedades } = props

    return <input className={`appInput ${ehModoNoturno && 'appInputNoturno'}`} {...outrasPropriedades}/>
}


export default AppInput



