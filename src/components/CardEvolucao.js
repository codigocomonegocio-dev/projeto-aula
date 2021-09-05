import React, { useState } from 'react'
import DinheiroTexto from 'components/DinheiroTexto'
import BarraProgresso from 'components/BarraProgresso'
import TituloComIcone from 'components/TituloComIcone'
import Card from 'components/Card'

import IconeEmergencia from '../assets/money.png'

const CardSeletor = ({ valorObjetivo, valorAtual, text1, text2 }) => {
  return (
    <Card>
      <div className="card-evolucao">
        <div className="titulo-icone">
          <TituloComIcone
            titulo="Reserva de emergência"
            icone={IconeEmergencia}
          />
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
    </Card>
  )
}

export default CardSeletor
