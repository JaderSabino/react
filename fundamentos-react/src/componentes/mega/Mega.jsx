import React, { useState } from 'react';

export default props => {

    const [numerosSorteados, setNumerosSorteados] = useState(Array(props.quantidadeNumeroSorteado).fill(0));

    const sortearNumeros = () => {
        const novoArray = Array(props.quantidadeNumeroSorteado)
            .fill(0)
            .reduce(array => [...array, gerarNumerosNaoContidos(array)], [])
            .sort((a, b) => a - b);
        setNumerosSorteados(novoArray);
    }

    const gerarNumerosNaoContidos = (array) => {
        const min = 1;
        const max = 60;
        const numero = parseInt(Math.random() * ( max - min )) + min;
        return array.includes(numero) ? gerarNumerosNaoContidos(array) : numero
    }

    return <>
        <h3>Mega</h3>
        <h4>{numerosSorteados.join(' ')}</h4>
        <button onClick={sortearNumeros} >Sortear Números</button>
    </>
}
