import React from 'react'
import Imagem from '../assets/money.png'

const TituloComIcone = () => {
  return (
    <>
      <div className="titulo-com-imagem">
        <div className="Escudo">
          <img src={Imagem} alt="titulo" />
        </div>
        <div className="Texto">
          <h2>Reserva de emergência</h2>
        </div>
      </div>
    </>
  )
}
export default TituloComIcone
