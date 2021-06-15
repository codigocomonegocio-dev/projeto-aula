import React from 'react'

import Botao from 'components/Botao'
import Link from 'components/Link'


const Home = () => (
  <>
    <Botao texto="Entre com Facebook" classe="btnFacebook" />
    <Botao texto="Entre com Google" classe="btnGoogle" />
    <Botao texto="Continuar" classe="btnContinuar" />
    <Botao texto="Entrar" classe="btnEntrar" />
    <Link texto="Ainda não possui conta?" />


  </>
)
export default Home
