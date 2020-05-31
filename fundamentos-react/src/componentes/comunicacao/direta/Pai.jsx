import React from 'react';

import Filho from './Filho';

export default props => 
    <>
        <Filho {...props}><strong>Jader</strong></Filho>
        <Filho sobrenome={props.sobrenome}>Mirlenne</Filho>
        <Filho sobrenome="Sabino Borges">Judson</Filho>
    </>