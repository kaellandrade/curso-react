const INITIAL_STATE = {
    description: '',
    list: []
}

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'DESCRIPTION_CHANGED') {
        return { ...state, description: action.payload }
    } else if (action.type === 'TODO_SEARCHED') {
        return { ...state, list: action.payload }
    } else if (action.type === 'TODO_CLEAR') {
        return { ...state, description: '' }
    } else {
        return state
    }
}