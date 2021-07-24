import React, { useState } from 'react'

import iconeMapa from '../assets/map.svg'
import iconeChecado from '../assets/check.png'

const TextoMarcado = ({ text }) => {
  const [imagem, setImagem] = useState(iconeMapa)
  const [classeRiscado, setClasseRiscado] = useState('')
  const [estaRiscado, setEstaRiscado] = useState(true)

  const AlternaRiscado = () => {
    if (estaRiscado) {
      setClasseRiscado('riscado')
      setImagem(iconeChecado)
    } else {
      setClasseRiscado('')
      setImagem(iconeMapa)
    }

    setEstaRiscado(!estaRiscado)
  }

  return (
    <>
      <div className="textoMarcado" onClick={AlternaRiscado}>
        <img src={imagem} alt="Ícone de Mapa" />
        <span className={classeRiscado}>{text}</span>
      </div>
    </>
  )
}

export default TextoMarcado
