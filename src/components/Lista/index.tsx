import React from "react";
import style from'./Lista.module.scss'

export default function Lista() {

  const tarefas = [
    {
      tarefa: "React",
      tempo: "01:00:00"
    },
    {
      tarefa: "Typescript",
      tempo: "02:00:00"
    }
  ];

  return (
    <aside className={style.listaTarefas}>
      <ul>
        <h2>
          Estudos do dia
        </h2>
        {tarefas.map((item, index) => (
          <li className={style.item} key={index}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>

  )
}