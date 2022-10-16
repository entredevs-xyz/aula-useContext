import React, { useContext } from 'react'
import { ContextoModoNoturno } from '../../contextos/contextoModoNoturno'
import './style.css'

const AppCloseButton = (props) => {

    const { ehModoNoturno } = useContext(ContextoModoNoturno)
    const { onClickFechar } = props

    return <button
        className={`appCloseButton ${ehModoNoturno && 'appCloseButtonNoturno'}`}
        onClick={() => {
            if (onClickFechar)
                onClickFechar()
        }}> X</button>

}


export default AppCloseButton

