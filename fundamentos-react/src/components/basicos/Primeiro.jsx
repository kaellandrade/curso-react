import React from 'react'

/**
 * Criando um primeiro componente usando a notação JSX
 */
export default function Primeiro() {
    const msg = 'Seja bem vindo(a)!'
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{msg}</p> 
        </div>
    );
}