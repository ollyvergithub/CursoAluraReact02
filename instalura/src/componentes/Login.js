import React from 'react';

class Login extends React.Component{

    constructor(props){
        super(props);
        console.log('Props que vieram da Index.js para o Login.js ', this.props);

        this.state  = {msg: this.props.location.state}

        //this.state = {msg: ''}
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
                    throw new Error('Erro ao se logar');
                }
            })
            .then(token => {
                console.log(token);

                localStorage.setItem('auth-token', token);
                // Navegação Programática
                this.props.history.push('/timeline');
            })
            .catch(erro => {
                this.setState({msg: erro.message});
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