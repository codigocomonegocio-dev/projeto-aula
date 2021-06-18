import React, { Component } from 'react'

export default class Login extends Component {

state = {
    errorEmail: "",
}

validar = (props) => {

    if (props.target.value==null) {
    this.setState({
        errorEmail: ""
    })            
    }

    if (!props.target.value) {

    this.setState({
        errorEmail: ""
    })            

        } 
        
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.target.value)) {

                this.setState({
        errorEmail: "Insira um e-mail válido"
    })
        }

        else { 
                 this.setState({
        errorEmail: "e-mail válido"
    })
        }

}


render () {
return(
    <div className="login">
    <h1>Seu e-mail</h1>
    <input className="email" type="text" placeholder="e-mail" onChange={this.validar}></input>
    
    <p>{this.state.errorEmail}</p>
    <h2>Sua Senha</h2>
    <input className="senha" type="password" placeholder="senha"></input>
    </div>

)

}


}