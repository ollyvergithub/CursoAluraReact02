import React from 'react'

// Meus Componentes
import FotoHeader from './FotoHeader';
import FotoInfo from './FotoInfo';
import FotoAtualizacoes from "./FotoAtualizacoes";

class Foto extends React.Component{
    render() {
        return (
            <div className="foto">
                <FotoHeader/>
                <img alt="foto" className="foto-src" src="https://instagram.fcgh10-1.fna.fbcdn.net/t51.2885-15/e35/14482111_1635089460122802_8984023070045896704_n.jpg?ig_cache_key=MTM1MzEzNjM4NzAxMjIwODUyMw%3D%3D.2"/>
                <FotoInfo/>
                <FotoAtualizacoes/>
            </div>
        );
    }
}

export default Foto;