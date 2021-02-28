import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = (str1, str2) => {
    return [...str1].map((e, i) => `${e}${str2[i] || ""}`).join("")
}


const UseRef = (props) => {
    /**
     * Exercício #01
     */
    const [value1, setValue1] = useState("")
    // useRef retorna um objeto, ou seja a referência para um objeto
    const count = useRef(0)
    // Referencia meus dois inputs
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)




    /**
     * Exercício #02
     */

    const [value2, setvalue2] = useState("")

    useEffect(() => {
        count.current++ // não causa uma nova renderização, evita renderixação infinita
        myInput2.current.focus()
    }
        , [value1])

    useEffect(() => {
        count.current++ // não causa uma nova renderização, evita renderixação infinita
        myInput1.current.focus()
    }
        , [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />

            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input
                    type="text"
                    ref={myInput1}
                    className="input"
                    value={value1}
                    onChange={e => setValue1(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input
                    type="text"
                    ref={myInput2}
                    className="input"
                    value={value2}
                    onChange={e => setvalue2(e.target.value)}
                />
            </div>

        </div>
    )
}

export default UseRef
