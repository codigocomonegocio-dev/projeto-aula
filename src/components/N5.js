import React from 'react'
import Excluir from '../assets/Icons/Excluir'
import Dinheiro from './Dinheiro'

const N5 = () => {
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

export default N5
