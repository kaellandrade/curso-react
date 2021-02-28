import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "../actions/actionsType"

/**
 * Action creator de valor minimo
 * Retorna uma action
 */
export function alterarNumeroMinimo(novoNumero) {
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

export function alterarNumeroMax(novoNumero) {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}