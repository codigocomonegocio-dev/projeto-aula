import React, { useState } from 'react'
import Excluir from "./Excluir"

const N5 = () => {


  return (
    <>

      <div className="linha">
        <div className="coluna"><Excluir /><input className="item" type="text" placeholder="Item"></input></div>
        <div className="coluna"><input className="valor" type="value" placeholder="R$ 0,00"></input></div>
      </div>
    </>
  )
}

export default N5