import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Switch, Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

// Meus Componentes
import Login from "./componentes/Login";
import Logout from "./componentes/Logout";

function validaAutenticacao(){
    console.log('Valida Autenticacao da Index.js ');

    if(localStorage.getItem('auth-token') != null)
    {
        return true;
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/timeline" render={() => (
                validaAutenticacao() ? (
                    <App />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: 'Você precisa estar logado para acessar a Timeline!'
                        }}
                    />

                )
            )} />

            {/*Definindo Rota Padrão, caso as demais não sejam chamadas*/}
            <Route component={Login}/>

        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
