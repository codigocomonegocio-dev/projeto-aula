// Importação da Biblioteca padrão REACT
import React, { useState } from 'react'

// Criação do componente ProgressBar
const N7 = (props) => {
  const [corA, setCorA] = useState(props.corA)

  const montar = () => {
    const divA = document.getElementById('primeira')
    const divB = document.getElementById('segunda')
    const divC = document.getElementById('terceira')
    const divD = document.getElementById('quarta')

    if (props.total === '1') {
      divA.style.backgroundColor = props.corA //'#1968df'
      divA.style.width = props.tamanhoA + '%'
      divA.style.borderRadius = '10px'
    }
    if (props.total === '2') {
      divA.style.backgroundColor = props.corA
      divA.style.width = props.tamanhoA + '%'
      divA.style.borderRadius = '10px 0 0 10px'

      divB.style.display = 'block'
      divB.style.backgroundColor = props.corB
      divB.style.width = props.tamanhoB + '%'
      divB.style.borderRadius = '0 10px 10px 0'
    }

    if (props.total === '3') {
      divA.style.backgroundColor = props.corA
      divA.style.width = props.tamanhoA + '%'
      divA.style.borderRadius = '10px 0 0 10px'

      divB.style.display = 'block'
      divB.style.backgroundColor = props.corB
      divB.style.width = props.tamanhoB + '%'

      divC.style.display = 'block'
      divC.style.backgroundColor = props.corC
      divC.style.width = props.tamanhoC + '%'
      divC.style.borderRadius = '0 10px 10px 0'
    }

    if (props.total === '4') {
      divA.style.backgroundColor = props.corA
      divA.style.width = props.tamanhoA + '%'
      divA.style.borderRadius = '10px 0 0 10px'

      divB.style.display = 'block'
      divB.style.backgroundColor = props.corB
      divB.style.width = props.tamanhoB + '%'

      divC.style.display = 'block'
      divC.style.backgroundColor = props.corC
      divC.style.width = props.tamanhoC + '%'

      divD.style.display = 'block'
      divD.style.backgroundColor = props.corD
      divD.style.width = props.tamanhoD + '%'
      divD.style.borderRadius = '0 10px 10px 0'
    }
  }

  return (
    <>
      {
        (window.onload = function () {
          montar()
        })
      }

      <div className="N7">
        <div id="primeira" className="primeira"></div>
        <div id="segunda" className="segunda"></div>
        <div id="terceira" className="terceira"></div>
        <div id="quarta" className="quarta"></div>
      </div>
    </>
  )
}
// Exportando para renderização na Home
export default N7
