import React from 'react';

class FotoInfo extends React.Component{
    render() {
        return (
            <div className="foto-info">
                <div className="foto-info-likes">
                    {
                        this.props.foto.likers.map(liker => {
                            return (<a href="#">{liker.login}, </a>);
                        })
                    }
                    curtiram

                </div>

                <p className="foto-info-legenda">
                    <a className="foto-info-autor">autor </a>
                    {this.props.foto.comentario}
                </p>

                <ul className="foto-info-comentarios">

                    {
                        this.props.foto.comentarios.map(comentario => {
                           return  (
                               <li className="comentario">
                                   <a className="foto-info-autor">comentario.login </a>
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