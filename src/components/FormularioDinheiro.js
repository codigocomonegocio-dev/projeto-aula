import React, { useState } from 'react'
import Dinheiro from './Dinheiro'
import Excluir from './Excluir'

const FormularioDinheiro = () => {
  return (
    <>
      <div className="linha">
        <div className="coluna">
          <Excluir />
          <input className="item" type="text" placeholder="Item"></input>
        </div>
        <div className="coluna">
          <Dinheiro />
        </div>
      </div>
    </>
  )
}

export default FormularioDinheiro
