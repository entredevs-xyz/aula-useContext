import React, { useContext, useState } from 'react'
import AppButton from './components/appButton';
import AppInput from './components/appInput';
import AppCard from './components/appCard';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import { ContextoModoNoturno } from './contextos/contextoModoNoturno';

function App() {

  const [descricao, setDescricao] = useState('')
  const [atividades, setAtividades] = useState([{
    id:0,
    descricao:'teste'
  }])


  const { ehModoNoturno, trocarModo } = useContext(ContextoModoNoturno)



  const adicionarAtividade = () => {
    if(!descricao) return 
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


  return (
    <div className={`appContainer ${ehModoNoturno && 'appContainerNoturno'}`}>

      <h1>Cadastro de atividades</h1>

      <button
        onClick={trocarModo}
        className='modoNoturno'>
        {ehModoNoturno ? '🌛' : '🌞'}
      </button>

      <label htmlFor="descricao">Descrição:</label>

      <AppInput
        value={descricao}
        onChange={(event) => setDescricao(event?.target?.value ?? '')}
        type="text" />

      <AppButton 
          onClick={adicionarAtividade}>Cadastrar</AppButton>

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
