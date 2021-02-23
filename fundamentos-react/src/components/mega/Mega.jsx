import React, { useState } from 'react'
import './Mega.css'

export default props => {
    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min);
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
    }

    function gerarNumeros(qtd) {
        const numeros = Array(qtd).fill(0).reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        }, []).sort((n1, n2) => n1 - n2)
        return numeros;
    }
    const [qtd, setQtde] = useState(props.qtd || 6);
    const numerosIniciais = gerarNumeros(qtd);
    const [numeros, setNumeros] = useState(numerosIniciais);


    return (
        <div className='Mega'>
            <h2>Mega</h2>
            <div className="Numeros">
                {numeros.map((item, key) => {
                    if (item <= 9)
                        item = '0' + item
                    return (
                        <span key={key}>{item}</span>
                    )
                })}
            </div>
            <div>
                <label htmlFor="">Qtd Números</label>
                <input min="1" max="60" type="number" value={qtd} onChange={e => setQtde(+e.target.value)} />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtd))}>
                Gerar Números
            </button>
        </div>
    )
}