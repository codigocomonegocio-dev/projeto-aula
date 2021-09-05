import React, { useState } from 'react'

const EmailSenha = (props) => {
  const [email, setEmail] = useState()
  const [Senha, setSenha] = useState()
  const [Confirmar, setConfirmar] = useState()
  const [Erro, setErro] = useState()
  const [Erromail, setErromail] = useState()

  const Clicou = () => {
    if (!email) {
      setErromail('Entre com seu e-mail')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setErromail('e-mail inválido')
    } else {
      setErromail('e-mail válido')
    }

    if (Senha === Confirmar) {
      setErro('senha está correta')
    } else {
      setErro('A senha não Confere')
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
        <label>{Erromail}</label>
        <div className="coluna">
          <h2>Sua senha</h2>
          <input
            className="lacuna1"
            type="password"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          ></input>
          <label>{Erro}</label>
          <h3>Repetir senha</h3>
          <input
            className="lacuna2"
            type="password"
            placeholder=" Repetir Senha"
            onChange={(e) => setConfirmar(e.target.value)}
          ></input>
        </div>

        <button className="button button2" onClick={Clicou}>
          Enviar
        </button>
      </div>
    </>
  )
}

export default EmailSenha
