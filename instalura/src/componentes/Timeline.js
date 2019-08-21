import React from 'react';

// Meus Componentes
import Foto from './Foto';

class Timeline extends React.Component{

    constructor(){
        super();
        this.state = {fotos: []}
    }

    componentDidMount() {

        console.log("Peguei o Token do Login.js ", localStorage.getItem('auth-token'));

        fetch(`http://localhost:8080/api/fotos/?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`)
            .then(response => response.json())
            .then(fotos => {
                this.setState({fotos:fotos})
            });
    }

    render() {
        return (
            <div className="fotos container">
                {
                    this.state.fotos.map(foto => <Foto key={foto.id} foto={foto} />)
                }
            </div>
        );
    }
}

export default Timeline;