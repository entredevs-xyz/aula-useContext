import React from 'react'
import './style.css'

const AppCard = (props) => {

    const { atividade, onClickFechar, ehModoNoturno } = props

    return <div className={`appCard ${ehModoNoturno && 'appCardNoturno'}`}>
        <button onClick={() => { 
            if(onClickFechar)
                onClickFechar(atividade.id)
         }} className='appCardClose'>X</button>
        <span className='appCardTitle'> descrição: </span>
        <div className='appCardContainer'>
            {atividade.descricao}
        </div>
    </div>
}


export default AppCard

