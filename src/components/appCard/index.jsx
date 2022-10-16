import React, { useContext } from 'react'
import { ContextoModoNoturno } from '../../contextos/contextoModoNoturno'
import AppCloseButton from '../appCloseButton'
import AppSelect from '../appSelect'
import './style.css'

const AppCard = (props) => {

    const { ehModoNoturno } = useContext(ContextoModoNoturno)
    const { atividade, onClickFechar } = props

    return <div className={`appCard ${ehModoNoturno && 'appCardNoturno'}`}>
        
        <AppCloseButton
            ehModoNoturno={ehModoNoturno} 
            onClickFechar={() => {
                if(onClickFechar)
                    onClickFechar(atividade.id)
            }} />

        <span className='appCardTitle'> descrição: </span>
        <div className='appCardContainer'>
            {atividade.descricao}
        </div>
        
        <AppSelect
            ehModoNoturno={ehModoNoturno}
            opcoes={[
                {descricao:'Fazer'},
                {descricao:'Fazendo'},
                {descricao:'Feito'},
            ]}
        />
    </div>
}


export default AppCard

