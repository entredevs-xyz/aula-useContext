import React, { useContext } from 'react'
import { ContextoModoNoturno } from '../../contextos/contextoModoNoturno';
import './style.css';

const AppButton = (props) => {

    const { ehModoNoturno } = useContext(ContextoModoNoturno)

    return <button className={`appButton ${ehModoNoturno && 'appButtonNoturno'}`} {...props}/>

}


export default AppButton



