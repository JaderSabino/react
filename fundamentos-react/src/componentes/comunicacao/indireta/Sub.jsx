import React from 'react';

export default props => 
    <>
        <button onClick={() => {
            props.clickBotao(Math.random(), 'Gerado');
        }}>Alterar</button>
    </>