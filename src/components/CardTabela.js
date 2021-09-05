import React, { useState } from 'react'
import TituloComIcone from 'components/TituloComIcone'
import Card from 'components/Card'

import IconeCalendario from '../assets/icone-calendario.png'
import FormularioDinheiro from './FormularioDinheiro'

const CardTabela = () => {
  const [lista, setLista] = useState(['item', 'item'])

  const adicionaLinha = () => {
    let listaNova = [...lista]
    listaNova.push('item')

    setLista(listaNova)
  }

  return (
    <Card>
      <div>
        <div className="titulo-icone">
          <TituloComIcone titulo="Renda Mensal" icone={IconeCalendario} />
        </div>

        {lista && lista.map(() => <FormularioDinheiro />)}

        <button onClick={adicionaLinha}>adicionar renda</button>
      </div>
    </Card>
  )
}

export default CardTabela
