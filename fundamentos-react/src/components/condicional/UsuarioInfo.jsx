import React from 'react'
import If from './If'

export default props => {
    const usuario = props.usuario.nome;
    return (
        <div>
            <If teste={usuario}>
                Seja bem vindo <strong>{usuario}!</strong>
            </If>

            <If teste={!usuario}>
                Seja bem vindo <strong>Amigão</strong>
            </If>
        </div>
    )
}