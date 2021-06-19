import React, { useState } from 'react'
import Excluir from "../assets/Icons/Excluir"

const N5 = () => {

  
  return (
    <>
     <div className="tabela">
      <Excluir/>
      <input className="item" type="text" placeholder="Item"></input>
      <input className="valor" type="value" placeholder="R$ 0,00"></input>
     </div>
     <hr/>
    </>
  )
}

export default N5