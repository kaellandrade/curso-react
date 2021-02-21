import React from 'react'
import alunos from '../../data/alunos' // arrray dos alunos


export default props => {
    const estilo = { listStyle: 'none' }
    const listaJSX = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} {aluno.nota}
            </li>
        )
    });
    
    return (
        <div>
            <ul style={estilo}>
                {listaJSX}
            </ul>
        </div>
    )
}