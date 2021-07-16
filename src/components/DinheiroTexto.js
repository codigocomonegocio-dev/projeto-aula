import React, { useState } from 'react'

const DinheiroTexto = ({children, className}) => {
  

  const formatarMoeda = (valorCampo) => {
    
    if (valorCampo==null) {   
      return ""
    
    }
    console.log(valorCampo)

    let novoValor = String (valorCampo*100).replace('R$ ', '')
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

    return ('R$ ' + novoValor)

  }

  return (
    <p className={className}>
      {formatarMoeda(children)}
    </p>
  )
}
export default DinheiroTexto
