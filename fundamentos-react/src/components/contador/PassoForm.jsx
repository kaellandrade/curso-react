import React from 'react'
export default props => {
    return (
        <dir>
            <label htmlFor="passoInput">Passo:</label>
            <input
                id="passoIpunt"
                type="number"
                value={props.passo}
                onChange={e => props.setPasso(+e.target.value)} />
        </dir>
    );
}