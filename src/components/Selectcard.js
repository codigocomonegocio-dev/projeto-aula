import React, { useState } from 'react'

import casinha from '../assets/casinha.png'
import check from '../assets/check.png'



const Selectcard = ({ text }) => {

    const [image, setImage] = useState(casinha)
    
    const click = () => {
        setImage(check)
    }
  
  return (
    <>
     <style>
     @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
     </style>

     <button className="selectcard" onClick={click}>
      <img className="casinha" src={image} alt="vetor"/>
      <h1>{text}</h1> 

     </button>
    
      
    </>
  )
}

export default Selectcard
