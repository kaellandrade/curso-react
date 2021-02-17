import React from 'react'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default _ => (  //com default podemos usar funções anônimas
    <div id="app">
        <h1>Fundamentos react</h1>
        <Aleatorio titulo="Número aleatório" max={50} min={10}></Aleatorio>
        <Fragmento></Fragmento>
        <ComParametro titulo="Situação do Aluno" aluno="Micael Andrade" nota={9.3}></ComParametro>
        <Primeiro></Primeiro>
    </div>
);
