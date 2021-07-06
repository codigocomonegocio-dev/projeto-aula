import React, { useState } from 'react'

const Dinheiro = () => {
  const [valor, setValor] = useState('')

  const formatarMoeda = (evento) => {
    let valorCampo = evento.target.value

    let novoValor = valorCampo.replace('R$ ', '')
    novoValor = parseInt(novoValor.replace(/[\D]+/g, ''))
    novoValor = novoValor + ''
    novoValor = novoValor.replace(/([0-9]{2})$/g, ',$1')

    if (novoValor.length > 6) {
      novoValor = novoValor.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
    }

    if (novoValor.length === 1) {
      novoValor = '0,0' + novoValor
    }

    if (novoValor.length === 3) {
      novoValor = '0' + novoValor
    }

    if (novoValor === 'NaN') {
      novoValor = '0,00'
    }

    setValor('R$ ' + novoValor)
  }

  return (
    <input
      type="text"
      maxLength="13"
      className="dinheiro"
      value={valor}
      onChange={formatarMoeda}
      placeholder="R$ 0,00"
    />
  )
}
export default Dinheiro
