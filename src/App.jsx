import React, { useState } from 'react'
import AppButton from './components/appButton';
import AppInput from './components/appInput';
import AppCard from './components/appCard';
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {

  const [descricao, setDescricao] = useState('')
  const [atividades, setAtividades] = useState([])
  const [modo, setModo] = useState('normal')

  const adicionarAtividade = () => {
    const novaAtividade = {
      id: uuidv4(),
      descricao: descricao
    }
    setAtividades(atividadesAtuais => {
      return [novaAtividade, ...atividadesAtuais]
    })
    setDescricao('')
  }

  const removeAtividade = (id) => {

    setAtividades(atividadesAtuais => {
      return atividadesAtuais.filter(atividade => atividade.id !== id)
    })

  }

  const trocarModo = () => {
    setModo(modoAtual => modoAtual === 'normal' ? 'noturno' : 'normal')
  }


  return (
    <div className='appContainer'>

      <h1>Cadastro de atividades</h1>

      <button
        onClick={trocarModo}
        className='modoNoturno'>
        {modo === 'normal' ? '☀️' : '🌙'}
      </button>

      <label htmlFor="descricao">Descrição:</label>
      <AppInput
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
        type="text" />
      <AppButton onClick={adicionarAtividade}>Cadastrar</AppButton>

      <div className='cardContainer'>
        {atividades.map(atividade => {
          return <AppCard
            onClickFechar={removeAtividade}
            key={atividade.id}
            atividade={atividade} />
        })}

      </div>
    </div>
  );
}

export default App;
