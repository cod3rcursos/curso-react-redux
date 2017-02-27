import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, initialize } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import { cancel } from './billingCycleActions'

class BillingCycleForm extends Component {

    componentWillMount() {
        initialize('billingCycleForm', this.props.initialValues)
    }

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={labelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={labelAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.cancel}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm'})(BillingCycleForm)
const mapStateToProps = state => ({initialValues: state.billingCycle.initialValues})
const mapDispatchToProps = dispatch => bindActionCreators({cancel}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)