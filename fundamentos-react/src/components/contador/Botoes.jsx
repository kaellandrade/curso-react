import React from 'react'
export default props => {
    return (
        <div>
            <button className="Incremento" onClick={props.setInc}>+</button>
            <button className="Decremento" onClick={props.setDec}>-</button>
        </div>
    );
}