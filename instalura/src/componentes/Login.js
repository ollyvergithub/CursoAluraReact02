import React from 'react';

class Login extends React.Component{

    constructor(){
        super();
        this.state = {msg: ''}
    }


    envia(evento){
        evento.preventDefault();

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({login: this.login.value, senha: this.senha.value}),
            headers: new Headers({
                'Content-type': 'application/json',
            })

        };

        fetch('http://localhost:8080/api/public/login', requestInfo)

            .then(resposta => {

                if (resposta.ok){
                    return resposta.text();
                }else{
                    this.setState({msg: 'Erro ao se logar'})
                }
            })
            .then(token => {
                console.log(token);
            })
    }

    render() {
        return(
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span>{this.state.msg}</span>
                <form onSubmit={this.envia.bind(this)}>
                    <input type="text" ref={(input) => this.login = input}/>
                    <input type="password" ref={(input) => this.senha = input}/>
                    <input type="submit" value="Fazer Login"/>
                </form>
            </div>
        );
    }

}

export default Login;