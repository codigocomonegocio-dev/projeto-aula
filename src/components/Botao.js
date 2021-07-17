import React from 'react'

const Botao = ({ texto, classe }) => {
  return (
    <>
      <div className="botao">
        <button className={classe}>
          <span>{texto}</span>
        </button>
      </div>
    </>
  )
}
export default Botao
