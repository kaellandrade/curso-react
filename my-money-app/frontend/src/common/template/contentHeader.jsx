import React from 'react'
import './custom.css'
export default props => (
    <section className='content-header'>
        <h1>
            {props.title} <small className='center-Small'>{props.small}</small>
        </h1>
    </section>
)