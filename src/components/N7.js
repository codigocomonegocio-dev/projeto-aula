// Importação da Biblioteca padrão REACT
import React from 'react'
import styled from 'styled-components'

// Criação do componente ProgressBar
const N7 = (props) => {
  const ProgressN7 = styled.div`
      border-radius: 5rem;
      width: 500px;
      text-align: center;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow: hidden;
      position: relative;

      &::after {
        animation: N7-animacao 4s ease forwards infinite;
        background-color: #fff;
        content: '';
        display: block;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;

      @keyframes N7-animacao {
        to {
          transform: translateX(101%);
        }
      }
    `
  const ProgressN7First = styled.div`
    background-color: ${props.corFirst};
    width: ${props.tamanhoFrist}%;
    border-radius: 10px 0 0 10px;
    height: 100%;
  `
  const ProgressN7Monday = styled.div`
    background-color: ${props.corMonday};
    width: ${props.tamanhoMonday}%;
    height: 100%;
  `
  const ProgressN7Third = styled.div`
    background-color: ${props.corThird};
    width: ${props.tamanhoThird}%;
    height: 100%;
  `
  const ProgressN7Fourth = styled.div`
    background-color: ${props.corFourth};
    border-radius: 0 10px 10px 0;
    width: ${props.tamanhoFourth}%;
    height: 100%;
  `

  function ProgressN7Const(param) {
    if (param.retorno === '1') {
      return (
        <ProgressN7>
          <ProgressN7First style={{ borderRadius: '10px' }}></ProgressN7First>
        </ProgressN7>
      )
    } else if (param.retorno === '2') {
      return (
        <ProgressN7>
          <ProgressN7First></ProgressN7First>
          <ProgressN7Monday
            style={{ borderRadius: '0 10px 10px 0' }}
          ></ProgressN7Monday>
        </ProgressN7>
      )
    } else if (param.retorno === '3') {
      return (
        <ProgressN7>
          <ProgressN7First></ProgressN7First>
          <ProgressN7Monday></ProgressN7Monday>
          <ProgressN7Third
            style={{ borderRadius: '0 10px 10px 0' }}
          ></ProgressN7Third>
        </ProgressN7>
      )
    } else if (param.retorno === '4') {
      return (
        <ProgressN7>
          <ProgressN7First></ProgressN7First>
          <ProgressN7Monday></ProgressN7Monday>
          <ProgressN7Third></ProgressN7Third>
          <ProgressN7Fourth></ProgressN7Fourth>
        </ProgressN7>
      )
    } else {
      return (
        <ProgressN7>
          <ProgressN7First></ProgressN7First>
        </ProgressN7>
      )
    }
  }
  return (
    <>
      <ProgressN7Const retorno={props.total}></ProgressN7Const>
    </>
  )
}
// Exportando para renderização na Home
export default N7
