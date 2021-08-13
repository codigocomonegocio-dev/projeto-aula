import Login from './Login'

const Cadastro = () => {
  return (
    <div className="registro">
      <Login />
      <div className="senha2">
        <h2>Repetir senha </h2>
        <input
          className="senha"
          type="password"
          placeholder="Repetir senha"
        ></input>
      </div>
    </div>
  )
}

export default Cadastro
