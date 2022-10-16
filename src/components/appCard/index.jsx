import React from 'react'
import './style.css'

const AppCard = (props) => {

    const { atividade, onClickFechar } = props

    return <div className='appCard'>
        <button onClick={() => { 
            if(onClickFechar)
                onClickFechar(atividade.id)
         }} className='appCardClose'>X</button>
        <span className='appCardRitle'> descrição: </span>
        <div className='appCardContainer'>
            {atividade.descricao}
        </div>
    </div>
}


export default AppCard

