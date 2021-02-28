import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'
const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                {(state.user) ? <span className="text">{state.user.name}</span> : <span className="text">Anônimo</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button onClick={() => login(dispatch, 'João')} className="btn">Login</button>
                    <button onClick={() => dispatch({ type: "number_mul7" })} className="btn">*7</button>
                    <button onClick={() => numberAdd2(dispatch)} className="btn">+2</button>
                    <button onClick={() => dispatch({ type: "number_div15" })} className="btn">/25</button>
                    <button onClick={() => dispatch({ type: "round" })} className="btn">Round</button>
                    <button onClick={() => dispatch({ type: "number_addn", numero: -100 })} className="btn">Add N</button>
                </div>
            </div>
        </div >
    )
}

export default UseReducer
