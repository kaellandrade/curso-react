import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    let nome = '?';
    let idade = 0;
    let nerd = false;

    function fornecerInformacoes(nomeP, idadeP, nerdP) {
        nome = nomeP;
        idade = idadeP;
        nerd = nerdP;
    }


    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span>{nerd ? 'Verdade' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}