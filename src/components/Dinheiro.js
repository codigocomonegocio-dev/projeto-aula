import React, { useState } from 'react'

const Dinheiro = () => {
  const formatarMoeda = () => {
    var elemento = document.getElementById('valor')
    var valor = elemento.value

    valor = valor + ''
    valor = parseInt(valor.replace(/[\D]+/g, ''))
    valor = valor + ''
    valor = valor.replace(/([0-9]{2})$/g, ',$1')

    if (valor.length > 6) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
    }

    elemento.value = valor
    if (valor == 'NaN') elemento.value = ''
  }

  return (
    <>
      <div className="dinheiro">
        <label for="money">R$ </label>
        <input
          type="text"
          maxLength="10"
          id="valor"
          onKeyUp={formatarMoeda}
          placeholder="0,00"
        />
      </div>
    </>
  )
}
export default Dinheiro
