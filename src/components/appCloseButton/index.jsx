import React from 'react'
import './style.css'

const AppCloseButton = (props) => {

    const { onClickFechar, ehModoNoturno } = props

    return <button
        className={`appCloseButton ${ehModoNoturno && 'appCloseButtonNoturno'}`}
        onClick={() => {
            if (onClickFechar)
                onClickFechar()
        }}> X</button>

}


export default AppCloseButton

