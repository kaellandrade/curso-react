import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMax } from '../store/actions/numeros'

const Intervalo = (props) => {
    const { min, max } = props
    return (
        <Card title='Intervalo de números' red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" min={0}  onChange={(e) => props.alterarMinimo(+e.target.value)} value={min} />
                </span>

                <span>
                    <strong>Máximo</strong>
                    <input type="number"  min={0} onChange={(e) => props.alterarMax(+e.target.value)} value={max}
                    />
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        alterarMinimo(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMax(novoNumero) {
            const action = alterarNumeroMax(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Intervalo)