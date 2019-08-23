import React from 'react';
import {Link} from "react-router-dom";
import Pubsub from 'pubsub-js';

class FotoInfo extends React.Component{

    constructor(props){
        super(props);

        this.state = {likers: this.props.foto.likers, comentarios: this.props.foto.comentarios};
        console.log('Estou na Fotoinfo.js constructor() | ', this.state.likers);

    }

    componentWillMount() {
        Pubsub.subscribe('atualiza-liker', (topico, infoLiker) =>
        {


            if (this.props.foto.id === infoLiker.fotoId) {
                const possivelLiker = this.state.likers.find(liker => liker.login === infoLiker.liker.login);
                if (possivelLiker === undefined){
                    const novosLikers = this.state.likers.concat(infoLiker.liker);
                    this.setState({likers: novosLikers})
                }else {
                    const novosLikers = this.state.likers.filter(liker => liker.login !== infoLiker.liker.login);
                    this.setState({likers: novosLikers});
                }
            }
        });

        Pubsub.subscribe('novos-comentarios', (topico, infoComentario) =>{
            console.log('Estou na Fotoinfo.js componentWillMount | ', infoComentario);
            
            if (this.props.foto.id === infoComentario.fotoId){
                const novosComentarios = this.state.comentarios.concat(infoComentario.novoComentario);
                this.setState({comentarios: novosComentarios});

            }
        });
    }

    render() {
        return (
            <div className="foto-info">
                <div className="foto-info-likes">
                    {
                        this.state.likers.map(liker => {
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
                        this.state.comentarios.map(comentario => {
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