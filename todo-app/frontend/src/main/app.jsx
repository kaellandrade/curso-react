import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import About from '../about/about'
import Todo from '../todo/todo'
import Menu from '../template/menu'
import Routes from './routes'
import '../template/custon.css'
export default props => (
    <div className="container bg-Danger">
        <Menu/>
        <Routes/>
    </div>
)