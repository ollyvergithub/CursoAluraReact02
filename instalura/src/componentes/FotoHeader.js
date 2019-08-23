import React from 'react'
import {Link} from "react-router-dom";

class  FotoHeader extends React.Component{
    render() {
        return (
            <header className="foto-header">
                <figure key={this.props.foto.id} className="foto-usuario">
                    <img src={this.props.foto.urlPerfil} alt="foto do usuario"/>
                    <figcaption className="foto-usuario">
                        <Link to={`/timeline/${this.props.foto.loginUsuario}`}>
                            {this.props.foto.loginUsuario}
                        </Link>
                    </figcaption>
                </figure>
                <time className="foto-data">{this.props.foto.horario}</time>
            </header>
        );
    }
}

export default FotoHeader;