import React, { useContext } from 'react'
import { ContextoModoNoturno } from '../../contextos/contextoModoNoturno';
import './style.css';

const AppInput = (props) => {

    const { ehModoNoturno } = useContext(ContextoModoNoturno)

    return <input className={`appInput ${ehModoNoturno && 'appInputNoturno'}`} {...props}/>
}


export default AppInput



