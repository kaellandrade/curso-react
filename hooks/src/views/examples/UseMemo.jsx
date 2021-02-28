import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function sum(a, b) {
    const future = Date.now() + 2000
    while (Date.now() < future) { }

    return a + b
}

const UseMemo = (props) => {
    const [n1, steN1] = useState(0)
    const [n2, steN2] = useState(0)
    const [n3, steN3] = useState(0)

    const result = useMemo(() => sum(n1, n2), [n1,n2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <input
                    type="number"
                    className="input"
                    value={n1}
                    onChange={e => steN1(parseInt(e.target.value))}
                />
                <input
                    type="number"
                    className="input"
                    value={n2}
                    onChange={e => steN2(parseInt(e.target.value))}
                />
                <input
                    type="number"
                    className="input"
                    value={n3}
                    onChange={e => steN3(parseInt(e.target.value))}
                />
                <span className="text">{result}</span>
            </div>
        </div>

    )
}

export default UseMemo
