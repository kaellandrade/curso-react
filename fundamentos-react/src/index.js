import './index.css' // import realativo
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

const element = document.getElementById('root');

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do Aluno" aluno="Micael Andrade" nota = {9.3}></ComParametro>
    </div>,
    element
);