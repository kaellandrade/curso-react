import React from 'react'
import { render } from 'react-dom'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done} onClick={() => props.markAsDone(todo)} />
                    <IconButton style='warning' icon='undo' hide={!todo.done} onClick={() => props.markAsPending(todo)} />
                    <IconButton style='danger' hide={!todo.done} icon='trash-o' onClick={() => props.remove(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>

                </tr>
            </thead>

            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => (
    {
        list: state.todo.list
    }
)

const mapDispatchToProps = (dispatch) => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)