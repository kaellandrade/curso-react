import React from 'react'

import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default _ => (  //com default podemos usar funções anônimas
    <div id="app">
        <h1>Fundamentos react</h1>
        <Aleatorio titulo="Número aleatório" min={10} max={50}></Aleatorio>
        <Fragmento></Fragmento>
        <ComParametro titulo="Situação do Aluno" aluno="Micael Andrade" nota={9.3}></ComParametro>
        <Primeiro></Primeiro>
    </div>
);
