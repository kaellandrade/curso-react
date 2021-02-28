import './App.css'
import React from 'react'
import Menu from '../components/layout/Menu.jsx'
import Content from '../components/layout/Content.jsx'
import About from './examples/About.jsx'
import { BrowserRouter as Router } from 'react-router-dom'




const App = props => (
    <div className="App">
        <Router>
            <Menu></Menu>
            <Content></Content>
        </Router>
    </div>
)

export default App