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
import TituloComIcone from 'components/TituloComIcone'
import ResumoFinanceiro from 'components/ResumoFinanceiro'
import TextoMarcado from 'components/TextoMarcado'
import Avatar from 'components/Avatar'

const Home = () => (
  <section className="home">
    <h1>BarraProgresso</h1>
    <BarraProgresso
      valores={[
        {
          cor: '#000000',
          porcentagem: 100,
        },
        {
          cor: '#17D28F',
          porcentagem: 70,
        },
        {
          cor: '#1968DF',
          porcentagem: 40,
        },
        {
          cor: '#FC3467',
          porcentagem: 20,
        },
      ]}
    />

    <h1>Titulo</h1>
    <Titulo
      texto1="Preencha seus"
      destaque="gastos fixos"
      texto2="mensais"
      subtitulo="Não se preocupe, você poderá fazer isso depois"
      corDestaque="#FF0000"
    />

    <h1>Botões</h1>
    <Botao texto="Entre com Facebook" classe="btnFacebook" />
    <Botao texto="Entre com Google" classe="btnGoogle" />
    <Botao texto="Continuar" classe="btnContinuar" />
    <Botao texto="Entrar" classe="btnEntrar" />

    <h1>Link</h1>
    <Link texto="Ainda não possui conta?" />

    <h1>Dinheiro</h1>
    <Dinheiro />

    <h1>CardSeletor</h1>
    <CardSeletor text="Comprar uma casa" />

    <h1>FormularioDinheiro</h1>
    <FormularioDinheiro />

    <h1>Login</h1>
    <Login />

    <h1>EmailSenha</h1>
    <EmailSenha />

    <h1>TituloComIcone</h1>
    <TituloComIcone />

    <h1>ResumoFinanceiro</h1>
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
    <h1>TextoMarcado</h1>
    <TextoMarcado text="Minhas Metas" />
    <h1>Avatar</h1>
    <Avatar text="Brenno Ogeda" />
  </section>
)
export default Home
