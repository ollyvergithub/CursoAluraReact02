import React from 'react'


// Meus Componentes
import FotoHeader from './FotoHeader';
import FotoInfo from './FotoInfo';
import FotoAtualizacoes from "./FotoAtualizacoes";

class Foto extends React.Component{
    render() {
        return (
            <div className="foto">
                <FotoHeader foto={this.props.foto} perfil = {this.props.perfil}/>
                <img alt="foto" className="foto-src" src={this.props.foto.urlFoto}/>
                <FotoInfo foto={this.props.foto}/>
                <FotoAtualizacoes foto={this.props.foto}/>
            </div>
        );
    }
}

export default Foto;