// Importação da Biblioteca padrão REACT
import React from 'react'

// Criação do componente ProgressBar
const BarraProgresso = (props) => {
  return (
    <>
      <div className="N7-progress">
        <div
          className="primeira"
          style={{
            backgroundColor: props.CorA,
            width: props.CompA,
          }}
        ></div>
        <div
          className="segunda"
          style={{
            backgroundColor: props.CorB,
            width: props.CompA,
            display: props.FanB,
          }}
        ></div>
        <div
          className="terceira"
          style={{
            backgroundColor: props.CorC,
            width: props.CompC,
            display: props.FanC,
          }}
        ></div>
        <div
          className="quarta"
          style={{
            backgroundColor: props.CorD,
            width: props.CompD,
            display: props.FanD,
          }}
        ></div>
      </div>
    </>
  )
}
// Exportando para renderização na Home
export default BarraProgresso
