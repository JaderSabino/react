import React, { useState } from 'react';

import Sub from './Sub';

export default props => {

    const [texto, setTexto] = useState('Valor');

    const [valor, setValor] = useState(0);

    function clickAlterar(numero, textoGerado){
        setValor(numero);
        setTexto(textoGerado);
    }
    
    return <>
        <h4>{texto}: {valor}</h4>
        <Sub clickBotao={clickAlterar}/>
    </>
}