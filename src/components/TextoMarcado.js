import React, { useState } from 'react'

import map from '../assets/map.svg'
import check from '../assets/check.png'

const TextoMarcado = ({ text }) => {
  const [image, setImage] = useState(map)

  const [verified, setVerified] = useState(false)

  const [TextoMarcado, setTextoMarcado] = useState(false)

  const click = () => {
    setVerified(!verified)
    if (verified === true) {
      setImage(check)
    }
    if (TextoMarcado === true) {
      setTextoMarcado(
        <span
          style={{
            textDecoration: 'line-through',
          }}
        ></span>
      )
    } else if (verified === false) {
      setImage(map)
    }
  }

  return (
    <>
      <div className="textoMarcado" onClick={click}>
        <img className="map" src={image} alt="Ícone de Mapa" />
        <span>{text}</span>
      </div>
    </>
  )
}

export default TextoMarcado
