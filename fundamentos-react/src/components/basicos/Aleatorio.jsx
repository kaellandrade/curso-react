import React from 'react';

export default (props) => {
    let numero = Math.floor(Math.random() * (props.max + 1 - props.min) + props.min);
    return (
        <React.Fragment>
            <h3>Número aleatório</h3>
            <div id='painel'>
                <h4>Seu número é: <strong>{numero}</strong></h4>
            </div>
        </React.Fragment>
    );
}