import React, { useState } from 'react'

import casinha from '../assets/casinha.png'
import check from '../assets/check.png'

const CardSeletor = ({ text }) => {
  const [image, setImage] = useState(casinha)

  const [verified, setVerified] = useState(false)

  const click = () => {
    setVerified(!verified)
    if (verified === true) {
      setImage(check)
    } else if (verified === false) {
      setImage(casinha)
    }
  }

  return (
    <>
      <button className="card-seletor" onClick={click}>
        <img className="casinha" src={image} alt="vetor" />
        <p className="nome-card-seletor">{text}</p>
      </button>
    </>
  )
}

export default CardSeletor
