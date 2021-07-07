import React from 'react'
import N7 from 'components/N7'
import Dinheiro from 'components/Dinheiro'
import Botao from 'components/Botao'
import Link from 'components/Link'
import CardSeletor from 'components/CardSeletor'
import N5 from 'components/N5'
import Login from 'components/Login'
import Titulo from 'components/Titulo'
import EmailSenha from 'components/EmailSenha'

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
    <CardSeletor text="Comprar uma casa" />
    <N5 />
    <Login />
  
    <N7
      CorA={'red'}
      CompA={'50%'}
      CorB={'blue'}
      CompB={'50%'}
      FanB={'block'}
    ></N7>
    <N7
      CorA={'#1968df'}
      CompA={'25%'}
      CorB={'#17d28f'}
      CompB={'25%'}
      FanB={'block'}
      CorC={'#fc3467'}
      CompC={'25%'}
      FanC={'block'}
      CorD={'#e9eff2'}
      CompD={'25%'}
      FanD={'block'}
    ></N7>
    <N7></N7>
    <EmailSenha/>
  </>
)
export default Home
