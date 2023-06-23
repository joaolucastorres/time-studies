import React, { useState } from "react";
import style from './Lista.module.scss'
import Item from "./item";
import { ITarefa } from "../../types/tarefa";


export default function Lista({ tarefas, selecionaTarefa }: { tarefas: ITarefa[], selecionaTarefa: (tarefaSelecionada: ITarefa) => void }) {

  return (
    <aside className={style.listaTarefas}>
      <ul>
        <h2>
          Estudos do dia
        </h2>
        {tarefas.map((item) => (
          <Item
            key={item.id}
            item= {item}
            selecionaTarefa = {selecionaTarefa}
          />
        ))}
      </ul>
    </aside>

  )
}