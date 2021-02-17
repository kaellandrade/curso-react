import React from 'react';

export default props => {
    const { min, max } = props; // usando destructuring com objetos
    const numero = Math.floor(Math.random() * (max + 1 - min) + min);
    return (
        <React.Fragment>
            <h3>Número aleatório</h3>
            <p>
                Número mínimo: {min}
            </p>
            <p>
                Número máximo: {max}
            </p>
            <p>Seu número é: <strong>{numero}</strong></p>

        </React.Fragment>
    );
}