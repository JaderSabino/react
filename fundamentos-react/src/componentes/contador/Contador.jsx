import React, { Component } from 'react';

import Botoes from './Botoes';
import Valor from './Valor';
import Passo from './Passo';

export default  class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    adiciona = () => {
        this.setState({ 
            valor: this.state.valor + this.state.passo
        }) 
    }

    retira = () => {
        this.setState({ 
            valor: this.state.valor - this.state.passo
        }) 
    }

    validaPasso = (passo) => {
        if(passo < 0){
            return 0;
        }
        return passo;
    }

    atualizaInputPasso = (e) => {
        this.setState({
            passo: this.validaPasso(+e.target.value)
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Passo atualizaInputPasso={this.atualizaInputPasso} passo={this.state.passo}/>

                <Valor valor={this.state.valor}/>

                <Botoes adiciona={this.adiciona} retira={this.retira}/>

            </div>
        )
    }
}