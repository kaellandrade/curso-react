import { createStore, combineReducers } from 'redux'
import numerosReducers from './reducers/Numerosreducer'

const reducers = combineReducers({
    numeros: numerosReducers,

})

function storeConfig() {
    return createStore(reducers)
}
export default storeConfig