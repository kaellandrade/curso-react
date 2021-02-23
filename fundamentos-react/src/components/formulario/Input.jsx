import './Input.css'
import React, { useState } from "react";


export default props => {
    const estilo = {
        display: 'flex',
        flexDirection: 'column'

    }

    const [valor, setValor] = useState('Inicial');
    function quandoMudar(e) {
        setValor(e.target.value);
    }
    return (
        <div className="Input">
            <div style={estilo}>
                <input value={valor} onChange={quandoMudar}></input>
                <input value={valor} readOnly></input>
                <input value={undefined}></input>

            </div>

        </div>
    )
}