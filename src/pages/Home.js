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
import CardEvolucao from 'components/CardEvolucao'
import Dicas from 'components/Dicas'
import Card from 'components/Card'
import IconeNivel from 'components/IconeNivel'

import IconeOuro from '../assets/icone-ouro.png'
import IconeDinheiro from '../assets/icone-dinheiro.png'

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
      corDestaque="#673AB7"
    />

    <h1>Dicas</h1>
    <Dicas
      icone={IconeOuro}
      iconeGrande={false}
      texto1="Você poderia investir "
      destaque="aproximadamente"
      texto2=" R$ 893,00 (19%) da sua renda sem prejudicar seu padrão de vida."
    />

    <h1>Dicas com Card</h1>
    <Card>
      <Dicas
        icone={IconeDinheiro}
        iconeGrande={true}
        texto1="Você poderia investir "
        destaque="aproximadamente"
        texto2=" R$ 893,00 (19%) da sua renda sem prejudicar seu padrão de vida."
      />
    </Card>

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
      rendaTotal={5000}
      dividas={1000}
      contas={2000}
      futuro={1500}
      CorA="#FC3467"
      CorB="#1968DF"
      CorC="#17D28F"
      CorD="#111111"
    />
    <h1>TextoMarcado</h1>
    <TextoMarcado text="Minhas Metas" />
    <h1>Avatar</h1>
    <Avatar text="Brenno Ogeda" />
    <h1>CardEvolucao</h1>
    <CardEvolucao
      valorObjetivo={15000}
      valorAtual={7000}
      text1="Um valor inicial para sua reserva de emergência,"
      text2="é manter pelo menos 3 meses de gastos guardados."
    ></CardEvolucao>
    <h1>IconeNível</h1>
    <div className="relativeCirculo">
      <IconeNivel numero={5}></IconeNivel>
    </div>
  </section>
)
export default Home
