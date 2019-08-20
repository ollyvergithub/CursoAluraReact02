import React from 'react';

// Meus Componentes
import Foto from './Foto';

class Timeline extends React.Component{

    constructor(){
        super();
        this.state = {fotos: []}
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/public/fotos/alots')
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