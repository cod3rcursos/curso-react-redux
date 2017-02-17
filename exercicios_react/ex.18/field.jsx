import React, { Component } from 'react'
import { connect } from 'react-redux'

class Field extends Component {

    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.handleChange} value={this.props.value} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}
export default connect(mapStateToProps)(Field)