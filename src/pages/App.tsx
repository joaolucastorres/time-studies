import React, { useState } from 'react';
import Formulario from '../components/Formulario'
import Lista from '../components/Lista';
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa): void {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({ ...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true : false })))
  }

  function finalizaTarefa() {
    if (selecionado != undefined) {
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return { ...tarefa, selecionado: false, completado: true }
        }
        return tarefa
      }))
    }
  }


  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa} />
      <Cronometro
        finalizaTarefa={finalizaTarefa}
        selecionado={selecionado} />
    </div>
  );
}

export default App;
