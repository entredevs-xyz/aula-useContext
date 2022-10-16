import React, { useContext } from 'react'
import { ContextoModoNoturno } from '../../contextos/contextoModoNoturno'
import './style.css'

const AppSelect = (props) => {

    const { ehModoNoturno } = useContext(ContextoModoNoturno)
    const { opcoes = [] } = props
    const padrao = { descricao: '--' }

    return <select
        className={`appSelect ${ehModoNoturno && 'appSelectNoturno'} `}>
        {[padrao, ...opcoes].map(opcao => {
            return <option key={opcao.descricao}>{opcao.descricao}</option>
        })}
    </select>

}


export default AppSelect

