import React from 'react'
import Dinheiro from 'components/Dinheiro'
import Botao from 'components/Botao'
import Link from 'components/Link'
import SelectCard from 'components/SelectCard'
import N5 from 'components/N5'

const Home = () => (
  <>
    <Botao texto="Entre com Facebook" classe="btnFacebook" />
    <Botao texto="Entre com Google" classe="btnGoogle" />
    <Botao texto="Continuar" classe="btnContinuar" />
    <Botao texto="Entrar" classe="btnEntrar" />
    <Link texto="Ainda não possui conta?" />
    <Dinheiro />
    <SelectCard text='Comprar uma casa'/>
    <N5/>
  </>
)
export default Home
