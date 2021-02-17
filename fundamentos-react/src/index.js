import './index.css' // import realativo
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro';

const element = document.getElementById('root');

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>

    </div>,
    element
);