import React from 'react'

export default props => (
    <button type={props.type} onClick={props.onClick} className={`btn btn-${props.btnStyle}`}>
        <i className={`fa fa-${props.icon}`}></i>
    </button>
)