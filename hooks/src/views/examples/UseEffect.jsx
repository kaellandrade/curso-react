import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {

    /**
     * Função calcular fatorial Exercícios #01
     */
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)

    function calcFatorial(n) {
        return (n <= 1) ? 1 : calcFatorial(n - 1) * n;
    }

    useEffect(function () {
        setFactorial(calcFatorial(number))
    }, [number])

    const [answer, setAnswer] = useState("Par")

    function parImpar(n) {
        return (n % 2 === 0) ? "Par" : "Impar"
    }

    useEffect(function () {
        setAnswer(parImpar(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercícios #01" />

            <div className="center">

                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial}</span>
                </div>

                <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercícios #02" />

            <div className="center">
                <div>
                    <span className="text">Respota: </span>
                    <span className="text red">{answer}</span>
                </div>
            </div>



        </div>
    )
}

export default UseEffect
