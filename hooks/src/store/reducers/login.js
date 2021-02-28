export function userReducer(state, action) {

    if (action.type === 'login') {
        return { ...state, user: { name: action.nome } }
    }
    else {
        return state
    }
}