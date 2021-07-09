import React from 'react'
import Excluir from '../assets/Icons/Excluir'
import Dinheiro from './Dinheiro'

const FormularioDinheiro = () => {
  return (
    <>
      <div className="tabela">
        <Excluir />
        <input className="item" type="text" placeholder="Item"></input>
        <Dinheiro />
      </div>
      <hr />
    </>
  )
}

export default FormularioDinheiro
