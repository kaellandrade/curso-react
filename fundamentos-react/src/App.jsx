import React from 'react'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default _ => (  //com default podemos usar funções anônimas
    <div id="app">
        <h1>Fundamentos react</h1>
        <Fragmento></Fragmento>
        <ComParametro titulo="Situação do Aluno" aluno="Micael Andrade" nota={9.3}></ComParametro>
        <Primeiro></Primeiro>
    </div>
);
