import React, { useState } from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss'
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from 'uuid'

function Formulario({ setTarefas }: { setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }) {
  const [tarefa, setTarefa] = useState("")
  const [tempo, setTempo] = useState("00:00")

  function adicionaTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas(tarefasAntigas => [...tarefasAntigas, {
      tarefa, tempo, selecionado: false,
      id: uuidv4(),
      completado: false
    }])
    setTarefa("")
    setTempo("00:00")
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionaTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          required
          value={tarefa}
          onChange={event => setTarefa(event.target.value)}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input type="time"
          name="tempo"
          id="tempo"
          step="1"
          min="00:00:00"
          max="01:30:00"
          required
          value={tempo}
          onChange={event => setTempo(event.target.value)}
        />
      </div>
      <Botao
        type="submit">
        Adicionar
      </Botao>
    </form>
  )
}

export default Formulario