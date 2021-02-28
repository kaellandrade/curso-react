export function NumberReducer(state, action) {
    if (action.type === 'number_add2') {
        return { ...state, number: state.number + 2 }
    } else if (action.type === "number_mul7") {
        return { ...state, number: state.number * 7 }
    } else if (action.type === "number_div15") {
        return { ...state, number: state.number / 25 }
    } else if (action.type === "round") {
        return { ...state, number: parseInt(state.number) }
    } else if (action.type === "number_addn") {
        return { ...state, number: state.number + action.numero }
    }
    else {
        return state
    }
}