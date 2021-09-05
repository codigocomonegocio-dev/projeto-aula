import React, { useState } from 'react'
import Volta from 'components/Volta'
import Avanca from 'components/Avanca'

const nomesMeses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

const ComponenteMes = () => {
  const data = new Date()

  const [anoAtual, setAnoAtual] = useState(data.getFullYear())

  const [mesAtual, setMesAtual] = useState(data.getMonth())

  const Voltar = () => {
    if (mesAtual == 0) {
      setMesAtual(nomesMeses.length - 1)
      setAnoAtual(anoAtual - 1)
    } else {
      setMesAtual(mesAtual - 1)
    }
  }

  const Avancar = () => {
    if (mesAtual == nomesMeses.length - 1) {
      setMesAtual(0)
      setAnoAtual(anoAtual + 1)
    } else {
      setMesAtual(mesAtual + 1)
    }
  }

  return (
    <>
      <div className="componente-mes">
        <button className="volta" onClick={() => Voltar()}>
          <Volta />
        </button>
        <span className="mes">{nomesMeses[mesAtual]}</span>
        <span className="ano">{anoAtual}</span>
        <button className="avanca" onClick={() => Avancar()}>
          <Avanca />
        </button>
      </div>
    </>
  )
}

export default ComponenteMes
