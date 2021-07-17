import React from 'react'

const BarraProgresso = ({ valores }) => {
  return (
    <>
      <div className="barra-progresso">
        {valores &&
          valores.map((elemento) => (
            <div
              className="bloco"
              style={{
                backgroundColor: elemento.cor,
                width: elemento.porcentagem + '%',
              }}
            />
          ))}
      </div>
    </>
  )
}

export default BarraProgresso
