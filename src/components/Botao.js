import React from 'react'

const Botao = ({ texto, cor }) => {

  return (
    <>
      <div className='botao'>
        <button><span>{texto}</span></button>
      </div>
    </>
  )
}
export default Botao
