import { NumberReducer } from './number'
import { userReducer } from './login'


export function reducer(state, action) {
    let newstate = NumberReducer(state, action)
    return userReducer(newstate, action)
}