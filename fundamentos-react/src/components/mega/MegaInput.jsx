import './Mega.css'
import React from 'react'

export default props => {
    return (
        <div className="Inputs">
            <input id='totalNum' type="number" min={0} />
            <input type="number" min={0} />
            <input type="number" min={0} />
        </div>
    )
}