import React, { useState } from 'react'

import smileNormal from '../assets/smile-normal.png'
import smileMustache from '../assets/smile-mustache.png'

const Smile = ({ valor, cor }) => {
  const [imagem, setImagem] = useState(smileNormal)

  console.log(cor)

  const click = () => {
    setImagem(smileMustache)
  }

  return (
    <>
      <div className="smile">
        <img src={imagem} alt="imagem smile" />
        <h1>{valor}</h1>
        <button onClick={click}>Trocar Image</button>
      </div>
    </>
  )
}

export default Smile
