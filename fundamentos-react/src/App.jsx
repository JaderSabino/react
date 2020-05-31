import React from 'react';
import './App.css';

import Primeiro from './componentes/basicos/Primeiro';
import ComParametro from './componentes/basicos/ComParametro';
import ComFilhos from './componentes/basicos/ComFilhos';
import Repeticao from './componentes/basicos/Repeticao';
import Condicional from './componentes/basicos/Condicional';
import CondicionalComIf from './componentes/basicos/CondicionalComIf';
import Card from './componentes/layout/Card.jsx';
import Pai from './componentes/comunicacao/direta/Pai';
import Super from './componentes/comunicacao/indireta/Super';
import Input from './componentes/form/Input';
import Contador from './componentes/contador/Contador';
import Mega from './componentes/mega/Mega';

export default props => 
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="Décimo Primeiro Exercício" color=" #982395">
                <Mega quantidadeNumeroSorteado={8}/>
            </Card>

            <Card titulo="Décimo Exercício" color="#E1D041">
                <Contador passo={10} valor={0}/>
            </Card>

            <Card titulo="Nono Exercício" color="#DA4624">
                <Input/>
            </Card>

            <Card titulo="Oitavo Exercício" color="#E8B71A">
                <Super/>
            </Card>

            <Card titulo="Sétimo Exercício" color="#1FDA9A">
                <Pai sobrenome="Sabino Borges"/>
            </Card>

            <Card titulo="Sexto Exercício" color="#69D2E7">
                <CondicionalComIf numero={10}/>
            </Card>

            <Card titulo="Quinto Exercício" color="#A7DBDB">
                <Condicional numero={11}/>
            </Card>

            <Card titulo="Quarto Exercício" color="#8C6954">
                <Repeticao/>
            </Card>

            <Card titulo="Terceiro Exercício" color="#F38630">
                <ComFilhos>
                    <ul>
                        <li>Jader</li>
                        <li>Judson</li>
                        <li>Mirlenne</li>
                        <li>Kamila</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="Segundo Exercício" color=" #FA6900">
                <ComParametro titulo="Esse é o título" subtitulo="Este é o subtítulo"/>
            </Card>

            <Card titulo="Primeiro Exercício" color="#69D2E7">
                <Primeiro/>
            </Card>
        </div>

    </div>