import { spawn } from 'child_process'
import { ITarefa } from '../../../types/tarefa'
import style from './Item.module.scss'

export default function Item({ item, selecionaTarefa }: { item: ITarefa, selecionaTarefa: (tarefaSelecionada: ITarefa) => void }) {
  return (
    <li className={`${style.item} ${item.selecionado === true ? style.itemSelecionado : ""} ${item.completado === true ? style.itemCompletado : ""}`}
      onClick={() => !item.completado && selecionaTarefa(item)}
    >
      <h3>{item.tarefa}</h3>
      <span>{item.tempo}</span>
      {item.completado && <span className={style.concluido} aria-label={"Tarefa concluída"}></span>}
    </li>
  )
}