import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducers from './main/reducers'
import promise from 'redux-promise'

import App from './main/app'
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))