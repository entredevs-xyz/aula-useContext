import React from 'react'
import './style.css'

const AppSelect = (props) => {

    const { opcoes = [], ehModoNoturno } = props
    const padrao = { descricao: '--' }

    return <select
        className={`appSelect ${ehModoNoturno && 'appSelectNoturno'} `}>
        {[padrao, ...opcoes].map(opcao => {
            return <option >{opcao.descricao}</option>
        })}
    </select>

}


export default AppSelect

