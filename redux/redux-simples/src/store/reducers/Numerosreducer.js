import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "../actions/actionsType"


const inititalState = {
    min: 1,
    max: 10
}

export default function (state = inititalState, action) {
    if (action.type === NUM_MIN_ALTERADO) {
        {
            return {
                ...state,
                min: (action.payload <= state.max) ? action.payload : state.min // mantém os intervalos 
            }
        }

    } else if (action.type === NUM_MAX_ALTERADO) {
        return {
            ...state,
            max: (action.payload >= state.min) ? action.payload : state.max // mantém os intervalos 
        }
    } else {
        return state
    }

}