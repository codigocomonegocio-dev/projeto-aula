import React, { useState } from 'react'
import DinheiroTexto from 'components/DinheiroTexto'
import BarraProgresso from 'components/BarraProgresso'
import TituloComIcone from 'components/TituloComIcone'

const CardSeletor = ({ valorObjetivo, valorAtual, text1, text2 }) => {
  return (
    <>
      <div className="card-evolucao">
        <div className="titulo-icone">
          <TituloComIcone></TituloComIcone>
        </div>
        <div className="valores-reserva">
          <DinheiroTexto>0</DinheiroTexto>
          <DinheiroTexto>{valorAtual}</DinheiroTexto>
        </div>
        <div className="barra-evolucao">
          <BarraProgresso
            valores={[
              {
                cor: '#DDDDDD',
                porcentagem: 100,
              },
              {
                cor: '#17D28F',
                porcentagem: (valorAtual / valorObjetivo) * 100,
              },
            ]}
          ></BarraProgresso>
        </div>

        <div className="mensagem">
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    </>
  )
}

export default CardSeletor
