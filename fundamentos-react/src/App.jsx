import React from 'react'

import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card'

export default _ => (  //com default podemos usar funções anônimas
    <div id="app">
        <h1 className="Title">Fundamentos react</h1>
        <Card titulo="#4 - Desafio Aleatório">
            <Aleatorio titulo="Número aleatório" min={10} max={50}></Aleatorio>
        </Card>

        <Card titulo="#3 - Fragmento">
            <Fragmento></Fragmento>
        </Card>

        <Card titulo="#2 - Usando Parametro">
            <ComParametro titulo="Situação do Aluno" aluno="Micael Andrade" nota={9.3}></ComParametro>
        </Card>

        <Card titulo="#1 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>

    </div>
);
