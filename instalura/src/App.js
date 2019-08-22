import React from 'react';
import './css/reset.css';
import './css/style.css';
import './css/login.css';


// Meus Componentes
import Header from './componentes/Header'
import Timeline from './componentes/Timeline'


class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {usuario: this.props};

        console.log('-------------------------------------------------------------------');
        console.log('Estou na App.js. Parametro Usuario veio da Index.js: ', this.props.usuario.login);
        console.log('-------------------------------------------------------------------');
    }




    render() {
        return (
            <div id="root">
                <div className="main">
                    <Header/>
                    <Timeline login = {this.props.usuario.login}/>
                </div>
            </div>
        );
    }


}

export default App;
