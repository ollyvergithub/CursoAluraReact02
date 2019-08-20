import React from 'react';

// Meus Componentes
import Foto from './Foto';

class Timeline extends React.Component{
    render() {
        return (
            <div className="fotos container">
                <Foto/>
            </div>
        );
    }
}

export default Timeline;