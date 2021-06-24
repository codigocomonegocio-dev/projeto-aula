import React from 'react'
// Importando componente ProgressBar
import BarraProgresso from 'components/N7'

const Home = () => (
  <>
    <BarraProgresso
      total="1"
      corFirst="#1968df"
      tamanhoFrist={100}
    ></BarraProgresso>
    <BarraProgresso
      total="2"
      corFirst="#1968df"
      tamanhoFrist={50}
      corMonday="#17d28f"
      tamanhoMonday={50}
    ></BarraProgresso>
    <BarraProgresso
      total="3"
      corFirst="#1968df"
      tamanhoFrist={50}
      corMonday="#17d28f"
      tamanhoMonday={25}
      corThird="#fc3467"
      tamanhoThird={25}
    ></BarraProgresso>
    <BarraProgresso
      total="4"
      corFirst="#1968df"
      tamanhoFrist={50}
      corMonday="#17d28f"
      tamanhoMonday={25}
      corThird="#fc3467"
      tamanhoThird={25}
      corFourth="#e9eff2"
      tamanhoFourth={25}
    ></BarraProgresso>
  </>
)
export default Home
