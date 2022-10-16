import React from 'react'
import './style.css';

const AppButton = (props) => {

    const { ehModoNoturno, ...outrasPropriedades } = props

    return <button className={`appButton ${ehModoNoturno && 'appButtonNoturno'}`} {...outrasPropriedades}/>

}


export default AppButton



