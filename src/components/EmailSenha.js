import React, { useState } from 'react'

const EmailSenha = (props) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaConfirmar, setSenhaConfirmar] = useState('')
  const [erro, setErro] = useState()
  const [erroClasse, setErroClasse] = useState('')
  const [erroMail, setErroMail] = useState()

  const Clicou = () => {
    if (email == '') {
      setErroMail('Entre com seu e-mail')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setErroMail('e-mail inválido')
    } else {
      setErroMail('e-mail válido')
    }

    if (senha == '') {
      setErro('Preencha sua senha')
      setErroClasse('erro')
    } else if (senha == senhaConfirmar) {
      setErro('Senha correta!')
      setErroClasse('')
    } else {
      setErro('A senha não Confere')
      setErroClasse('erro')
    }
  }

  return (
    <>
      <div className="emailSenha">
        <h1>Seu e-mail</h1>
        <input
          className="email"
          type="text"
          placeholder="e-mail"
          value={props.email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>{erroMail}</label>
        <div className="coluna">
          <h2>Sua senha</h2>
          <input
            className={erroClasse + ' lacuna1'}
            type="password"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          ></input>
          <h3>Repetir senha</h3>
          <input
            className={erroClasse + ' lacuna2'}
            type="password"
            placeholder=" Repetir Senha"
            onChange={(e) => setSenhaConfirmar(e.target.value)}
          ></input>
          <span>{erro}</span>
        </div>

        <button className="button button2" onClick={Clicou}>
          Enviar
        </button>
      </div>
    </>
  )
}

export default EmailSenha
