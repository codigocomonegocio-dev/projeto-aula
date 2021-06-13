import React, { useState } from 'react'

import casinha from '../assets/casinha.png'
import check from '../assets/check.png'



const SelectCard = ({ text }) => {

    const [image, setImage] = useState(casinha)
    
    const click = () => {
        setImage(check)
    }
  
  return (
    <>
     <button className="select-card" onClick={click}>
      <img className="casinha" src={image} alt="vetor"/>
      <h1>{text}</h1> 
     </button>
    </>
  )
}

export default SelectCard
