import React, {useState} from 'react'

const EmailSenha = (props) => {

    const [email, setEmail] = useState ()

    const Clicou = () => {


        if (!email) {

            console.log("Entre com seu e-mail")

        } 
        
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {

            console.log("e-mail inválido")
        }

        else { 
            console.log("e-mail válido")
        }

        }

        return (
        <>
          <div className="emailSenha">
            <h1>Seu e-mail</h1>
            <input type="text" placeholder="e-mail" value={props.email} onChange={e => setEmail(e.target.value)}></input>
            <h2>Sua senha</h2>
            <input type="password" placeholder="senha"></input>
            <button onClick={Clicou}>Enviar</button>
          </div>
          
        </>
        )
}
  
export default EmailSenha
