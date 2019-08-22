import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Switch, Route, matchPath } from 'react-router-dom'
import {Redirect} from 'react-router-dom';


// corrigir o erro nesta aula
import createBrowserHistory from 'history/createBrowserHistory';


// Meus Componentes
import Login from "./componentes/Login";
import Logout from "./componentes/Logout";

/*const validaAutenticacao = () => {
    const history = createBrowserHistory();
    const match = matchPath(history.location.pathname,  {path: '/timeline/:login'});

    const privateRoute = match === null;

    console.log('Valida Autenticacao da Index.js');

    console.log('----------------------------------------');
    console.log('Constante history', history);

    console.log('----------------------------------------');
    console.log('Constante match', match);

    console.log('----------------------------------------');
    console.log('Constante privateRoute', privateRoute);

    return (privateRoute && localStorage.getItem('auth-token')) === null;
};*/


var var_usuario = '';

// Substitui essa parte pela parte acima para corrigir o erro nesta aula
function validaAutenticacao(){

    const history = createBrowserHistory();
    const match = matchPath(history.location.pathname,  {path: '/timeline/:login?'});

    const privateRoute = match;

    console.log('----------------------------------------');
    console.log('Constante history', history);

    console.log('----------------------------------------');
    console.log('Constante match', match);

    if(match && localStorage.getItem('auth-token') != null)
    {
        var_usuario = match.params;
        return true;
    }
}

ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/logout" component={Logout} />

            <Route path="/timeline/:login?" render={() => (
                validaAutenticacao() ? (
                    <App usuario = {var_usuario} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: 'Você precisa estar logado para acessar a Timeline!'
                        }}
                    />

                )
            )} />

            <Route component={Login}/>

        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
