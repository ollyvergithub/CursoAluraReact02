import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{

    render() {
        return (

            <header className="header container">
                <h1 className="header-logo">
                    Instalura
                </h1>

                <form className="header-busca">
                    <input type="text" name="search" placeholder="Pesquisa" className="header-busca-campo"/>
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