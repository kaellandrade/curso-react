import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleActions'
import IconButton from './IconButton';
import '../common/template/custom.css'

class BillingCycleList extends Component {
    componentWillMount() {
        this.props.getList();
    }

    renderRows() {
        const dados = this.props.list || [];

        return dados.map((elemento, chave) => (
            <tr key={chave}>
                <td>{elemento.name}</td>
                <td>{elemento.month}</td>
                <td>{elemento.year}</td>
                <td>
                    <IconButton btnStyle='warning' icon='pencil' onClick={() => this.props.showUpdate(elemento)} />
                    <IconButton btnStyle='danger' icon='trash-o' onClick={() => this.props.showDelete(elemento)} />
                </td>
            </tr>
        ))

    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(BillingCycleList)