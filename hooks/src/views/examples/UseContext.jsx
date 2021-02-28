import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SelectionTitle from '../../components/layout/SectionTitle'


import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    // Exercício #01
    const context = useContext(DataContext);

    function addNumber(delta) {
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }
    // Exercício #02
    const { text, number, setNumber, setText } = useContext(AppContext)

    useEffect (function(){
        if(number > 1322){
            setText('Alto')
        }
    },[number])
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SelectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>

                <div>
                    <button onClick={() => addNumber(-1)} className="btn">-1</button>
                    <button onClick={() => addNumber(1)} className="btn">+1</button>

                </div>
            </div>

            <SelectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>

                <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
            </div>
        </div >
    )
}

export default UseContext
