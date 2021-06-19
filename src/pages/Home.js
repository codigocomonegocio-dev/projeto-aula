import React from 'react'
import Dinheiro from 'components/Dinheiro'
import Botao from 'components/Botao'
import Link from 'components/Link'
import SelectCard from 'components/SelectCard'
import N5 from 'components/N5'
import Login from 'components/Login'
import Titulo from 'components/Titulo'

const Home = () => (
  <>
    <Titulo
      texto1="Preencha seus"
      destaque="gastos fixos"
      texto2="mensais"
      subtitulo="Não se preocupe, você poderá fazer isso depois"
      corDestaque="#FF0000"
    />
    <Botao texto="Entre com Facebook" classe="btnFacebook" />
    <Botao texto="Entre com Google" classe="btnGoogle" />
    <Botao texto="Continuar" classe="btnContinuar" />
    <Botao texto="Entrar" classe="btnEntrar" />
    <Link texto="Ainda não possui conta?" />
    <Dinheiro />
    <SelectCard text="Comprar uma casa" />
    <N5 />
    <Login />
  </>
)
export default Home
