import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import labelAndInput from '../common/form/labelAndInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Summary from '../billingCycle/summary'
import { init } from './billingCycleActions';
import ItemList from './itemList';
class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v;
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }
    render() {
        console.log(this.calculateSummary())

        const { handleSubmit, readOnly, credits, debts } = this.props;
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field readOnly={readOnly} name='name' component={labelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field readOnly={readOnly} name='month' component={labelAndInput} label='Mês' cols='12 4' placeholder='Informe o mês' type='number' min='1' max='12' />
                    <Field readOnly={readOnly} name='year' component={labelAndInput} label='Ano' cols='12 4' placeholder='Informe o ano' type='number' />

                    <Summary credit={sumOfCredits} debt={sumOfDebts}>

                    </Summary>

                    <ItemList field='credits' legend='Créditos' cols='12 6' list={credits} readOnly={readOnly} />
                    <ItemList showStatus={true} field='debts' legend='Débitos' cols='12 6' list={debts} readOnly={readOnly} />
                </div>
                <div className="box-footer">
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
const selector = formValueSelector('billingCycleForm');
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);