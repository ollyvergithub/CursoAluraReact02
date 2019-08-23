import React from 'react';
import Pubsub from 'pubsub-js';

class FotoAtualizacoes extends React.Component{

    constructor(props){
        super(props);

        this.state = {likeada: this.props.foto.likeada};

        console.log('Estou no construtor da FotoAtualizacoes.js props |  ',  this.state.likeada);
    }

    like(evento){
        evento.preventDefault();


        fetch(`http://localhost:8080/api/fotos/${this.props.foto.id}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, {method: 'POST'})
            .then(resposta => {
                if (resposta.ok){
                    return resposta.json();
                }else{
                    throw new Error("Não foi possível fazer o like na foto")
                }
            })
            .then(liker =>{
                console.log('-------------------------------------------');
                console.log('Estou na função like() FotoAtualizacoes.js LIKER | ', liker);
                console.log('-------------------------------------------');

               this.setState({likeada: !this.state.likeada});

               Pubsub.publish('atualiza-liker', {fotoId: this.props.foto.id ,liker});

            });

    }

    enviaComentario(evento){
        evento.preventDefault();

        const requestInfo = {
            method: 'POST',
            body:JSON.stringify({texto: this.comentario.value}),
            headers: new Headers({
                'Content-type': 'application/json',
            })

        };

       fetch(`http://localhost:8080/api/fotos/${this.props.foto.id}/comment?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, requestInfo)
       .then(resposta =>{
           if (resposta.ok){
               return resposta.json();
           }else {
               throw new Error('Não foi possível comentar');
           }
        })
           .then(novoComentario => {
               Pubsub.publish('novos-comentarios', {fotoId: this.props.foto.id, novoComentario:novoComentario});
           })

    }

    render() {
        return (
            <section className="fotoAtualizacoes">
                <a onClick={this.like.bind(this)} className={this.state.likeada ? 'fotoAtualizacoes-like-ativo' : 'fotoAtualizacoes-like'}>Likar</a>
                <form className="fotoAtualizacoes-form" onSubmit={this.enviaComentario.bind(this)}>
                    <input name="comentario" ref={input => this.comentario = input} type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" />
                    <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
                </form>

            </section>
        );
    }
}
export default FotoAtualizacoes;