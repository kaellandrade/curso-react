import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setNome] = useState('?'); // retorna um array com duas posições primaira posição será o valor, segunda será uma função para alterar o valor
    const [idade, setIdade] = useState(0); // retorna um array com duas posições primaira posição será o valor, segunda será uma função para alterar o valor
    const [nerd, setNerd] = useState(false); // retorna um array com duas posições primaira posição será o valor, segunda será uma função para alterar o valor
    console.log(useState('?'));
    function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
    }


    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{nerd ? 'Verdade' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}