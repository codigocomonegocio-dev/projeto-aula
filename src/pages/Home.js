import React from 'react'

import Botao from 'components/Botao'
import Link from 'components/Link'


const Home = () => (
  <>
    <Botao texto="Entre com Facebook" corFundo="#344F8A" />
    <Botao texto="Entre com Google" corFundo="#E63D33" />
    <Botao texto="Continuar" corFundo="#0FA8F0" />
    <Botao texto="Entrar" corFundo="#1BA75A" />
    <Link texto="Ainda não possui conta?" />
  </>
)
export default Home
