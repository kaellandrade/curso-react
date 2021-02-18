import React from 'react'

import './App.css'
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia';
export default _ => (  //com default podemos usar funções anônimas
    <div className="App">
        <h1 className="Title">Fundamentos react</h1>

        <div className="Cards">
            <Card titulo="#5 - Componente com filhos" color="#78C0A8">
                <Familia sobrenome="Andrade"></Familia>
            </Card>

            <Card titulo="#4 - Desafio Aleatório" color="#8C4646">
                <Aleatorio titulo="Número aleatório" min={10} max={50}></Aleatorio>
            </Card>

            <Card titulo="#3 - Fragmento" color="#F2AE72">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="#2 - Usando Parametro" color="#D96459">
                <ComParametro titulo="Situação do Aluno" aluno="Micael Andrade" nota={9.3}></ComParametro>
            </Card>

            <Card titulo="#1 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
);
