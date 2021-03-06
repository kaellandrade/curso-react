import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = { credits: [{}], debts: [{}] };

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')

}
export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const ID = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${ID}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com Sucesso')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => (toastr.error('Erro', error)));
            })
    }
}

function showTab(tab, billingCycle) {
    return [
        showTabs(tab),
        selectTab(tab),
        initialize('billingCycleForm', billingCycle)
    ]
}
export function showUpdate(billingCycle) {
    return showTab('tabUpdate', billingCycle);

}

export function showDelete(billingCycle) {
    return showTab('tabDelete', billingCycle);
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}