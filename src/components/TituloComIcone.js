import React from 'react'

const TituloComIcone = ({ titulo, icone }) => {
  return (
    <>
      <div className="titulo-com-imagem">
        <div className="icone">
          <img src={icone} alt={'Icone ' + titulo} />
        </div>
        <div className="texto">
          <h2>{titulo}</h2>
        </div>
      </div>
    </>
  )
}
export default TituloComIcone
