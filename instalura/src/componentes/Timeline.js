import React from 'react';
import Pubsub from 'pubsub-js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Meus Componentes
import Foto from './Foto';

class Timeline extends React.Component{

    constructor(props){
        super(props);
        this.state = {fotos: []};
        this.login = this.props.login;
    }

    componentWillMount() {
        Pubsub.subscribe('pesquisa-de-fotos', (topico, pesquisaDeFotos)=>{
            console.log("--------------------------------------------------------------------");
            console.log("Pesquisa de Fotos por Login  que veio da Header.js para a Timeline.js | ", pesquisaDeFotos);
            console.log("--------------------------------------------------------------------");

            this.setState({fotos: pesquisaDeFotos});
        })
    }

    carregaFotos(props){

        console.log('-------------------------------------------------------------------');
        console.log('Estou na TIMELINE.js. Parametro Usuario veio da App.js: - carregaFotos(props)', props);
        console.log('-------------------------------------------------------------------');

        let urlPerfil;

        if (this.login === undefined){
            urlPerfil = `http://localhost:8080/api/fotos/?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`
        }else {
            console.log("Peguei o Token do Login.js ", localStorage.getItem('auth-token'));
            urlPerfil = `http://localhost:8080/api/public/fotos/${this.login}`
        }
        fetch(urlPerfil)
            .then(response => response.json())
            .then(fotos => {
                this.setState({fotos:fotos})
            });
    }

    componentDidMount() {
        this.carregaFotos();
    }

    componentWillReceiveProps(nextProps, nextContext) {

        console.log('-------------------------------------------------------------------');
        console.log('Estou na Timeline.js componentWillReceiveProps - nextProps | ', nextProps);
        console.log('Estou na Timeline.js componentWillReceiveProps - nextContext | ', nextContext);
        console.log('-------------------------------------------------------------------');

        if (nextProps.login != undefined){
            this.login = nextProps.login;
            this.carregaFotos();
        }
    }

    render() {
        return (
            <div className="fotos container">
                <ReactCSSTransitionGroup
                    transitionName="timeline"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                {
                    this.state.fotos.map(foto => <Foto key={foto.id} foto={foto} perfil={this.props.login} />)
                }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default Timeline;