import React from 'react';
import produtos from '../../data/produtos';
import '../layout/ListaProdutos.css';

export default props => {
    const trs = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td className='preco' >{produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })
    return (
        <div className='tabelaProduto'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody className='listapares formatText' >
                    {trs}
                </tbody>
            </table>
        </div>
    );
}