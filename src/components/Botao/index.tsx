import React from "react";
import style from './Botao.module.scss'

interface Props {
  children: React.ReactNode,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?(): void
}

function Botao({ children, type, onClick }: Props){
    const verifiedType = type == undefined ? 'button' : type
    return (
      <button className={style.botao}
        type={verifiedType}
        onClick={onClick}
      >
        {children}
      </button>
    )
}

export default Botao;