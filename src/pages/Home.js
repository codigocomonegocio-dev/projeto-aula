import React from 'react'
import BarraProgresso from 'components/BarraProgresso'
import Dinheiro from 'components/Dinheiro'
import Botao from 'components/Botao'
import Link from 'components/Link'
import CardSeletor from 'components/CardSeletor'
import FormularioDinheiro from 'components/FormularioDinheiro'
import Login from 'components/Login'
import Titulo from 'components/Titulo'
import EmailSenha from 'components/EmailSenha'
import ResumoFinanceiro from 'components/ResumoFinanceiro'

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
    <FormularioDinheiro />
    <Login />

    <BarraProgresso
      CorA={'red'}
      CompA={'50%'}
      CorB={'blue'}
      CompB={'50%'}
      FanB={'block'}
    ></BarraProgresso>
    <BarraProgresso
      CorA={'#1968d#FC3467'}
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
    ></BarraProgresso>
    <BarraProgresso></BarraProgresso>
    <EmailSenha />
    <ResumoFinanceiro
      rendaTotal={3000}
      dividas={600}
      contas={1000}
      futuro={800}
      CorA="#FC3467"
      CorB="#1968DF"
      CorC="#17D28F"
      CorD="#111111"
    />
  </>
)
export default Home
