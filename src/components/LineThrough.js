import React, { useState } from 'react'

import map from '../assets/map.png'
import check from '../assets/check.png'

const LineThrough = ({ text }) => {
  const [image, setImage] = useState(map)

  const [verified, setVerified] = useState(false)

  const [lineThrough, setlineThrough] = useState(false)

  const click = () => {
    setVerified(!verified)
    if (verified === true) {
      setImage(check)
    }
    if (lineThrough === true) {
      setlineThrough(
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
      <div className="lineThrough" onClick={click}>
        <img className="map" src={image} alt="Ícone de Mapa" />
        <span>{text}</span>
      </div>
    </>
  )
}

export default LineThrough
