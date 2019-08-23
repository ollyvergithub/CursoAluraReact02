import React from 'react';
import {Link} from "react-router-dom";

class FotoInfo extends React.Component{
    render() {
        return (
            <div className="foto-info">
                <div className="foto-info-likes">
                    {
                        this.props.foto.likers.map(liker => {
                            return (<Link key={this.props.foto.id} to={`/timeline/${liker.login}`}>{liker.login}, </Link>);
                        })
                    }
                    curtiram

                </div>

                <p className="foto-info-legenda">
                    <a className="foto-info-autor">autor: {this.props.foto.loginUsuario} </a>
                    {this.props.foto.comentario}
                </p>

                <ul className="foto-info-comentarios">

                    {
                        this.props.foto.comentarios.map(comentario => {
                           return  (
                               <li className="comentario">
                                   <Link to={`/timeline/${comentario.login}`} className="foto-info-autor">{comentario.login} </Link>
                                   {comentario.texto}
                               </li>
                           );
                        })
                    }

                </ul>
            </div>
        );
    }
}

export default FotoInfo;