import React from 'react';
import {Link} from 'react-router-dom';
import Pubsub from 'pubsub-js';

class Header extends React.Component{

    pesquisaFotosLogin(evento){

        evento.preventDefault();
        console.log("--------------------------------------------------------------------");
        console.log("Estou na Header - pesquisaFotosLogin()", this.loginPesquisado.value);
        console.log("--------------------------------------------------------------------");
        fetch(`http://localhost:8080/api/public/fotos/${this.loginPesquisado.value}`)
            .then(resposta => {
                if (resposta.ok){
                    return resposta.json();
                }else {
                    throw new Error("Não foi possível realizar a busca");
                }
            })
            .then(fotos =>{
                Pubsub.publish('pesquisa-de-fotos', fotos);

                console.log("--------------------------------------------------------------------");
                console.log("Pesquisa de Fotos por Login na Header.j | ", fotos);
                console.log("--------------------------------------------------------------------");
            })
    }

    render() {
        return (

            <header className="header container">
                <h1 className="header-logo">
                    Instalura
                </h1>

                <form className="header-busca" onSubmit={this.pesquisaFotosLogin.bind(this)}>
                    <input ref={input => this.loginPesquisado = input} type="text" name="search" placeholder="Pesquisa" className="header-busca-campo"/>
                    <input type="submit" value="Buscar" className="header-busca-submit"/>
                    <span className="container-logout"><Link to="/logout">Logout</Link></span>
                </form>

                <nav>
                    <ul className="header-nav">
                        <li className="header-nav-item">
                            <a href="#">
                                ♡

                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

}

export default Header