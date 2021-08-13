import React, { useState } from 'react'

const Login = () => {
  const [errorEmail, setErrorEmail] = useState('')

  const validar = (props) => {
    if (props.target.value == null) {
      setErrorEmail('')
    }

    if (!props.target.value) {
      setErrorEmail('')
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.target.value)
    ) {
      setErrorEmail('Insira um e-mail válido')
    } else {
      setErrorEmail('e-mail válido')
    }
  }

  return (
    <div className="login">
      <h1>Seu e-mail</h1>
      <input
        className="email"
        type="text"
        placeholder="e-mail"
        onChange={validar}
      ></input>

      <p>{errorEmail}</p>
      <h2>Sua senha</h2>
      <input className="senha" type="password" placeholder="senha"></input>
    </div>
  )
}

export default Login
