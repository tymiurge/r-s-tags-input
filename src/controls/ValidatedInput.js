import React from 'react'
import { Input, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { validation } from './../utils'

class ValidatedInput extends React.Component {

  static propTypes = {
    value: PropTypes.string,
    validators: PropTypes.arrayOf(PropTypes.func),
    fieldBinding: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
    formField: PropTypes.bool,
    label: PropTypes.string
  }

  static defaultProps = {
    value: '',
    validators: [],
    fieldBinding: null,
    onChange: () => { },
    placeholder: '',
    icon: '',
    type: 'text',
    formField: false,
    label: ''
  }

  state = {
    value: this.props.value,
    valid: true
  }

  styles = {
    error: {
      borderColor: 'rgb(255, 40, 0)'
    }
  }

  onChange = value => {
    const valid = validation.validateAgainstArr(value, this.props.validators)
    this.setState(
      { ...this.state, value, valid },
      () => this.props.onChange(this.props.fieldBinding, value, this.state.valid)
    )
  }

  onBlur = () => {
    const valid = this.props.validators.reduce(
      (accumulator, current) => {
        return accumulator && current(this.state.value)
      },
      true
    )
    this.setState(
      { ...this.state, valid },
      () => this.props.onChange(this.props.fieldBinding, this.state.value, valid)
    )
  }

  render() {
    let _props = Object.assign({
      fluid: true,
      placeholder: this.props.placeholder,
      value: this.state.value,
      className: this.state.valid ? '' : 'error-state',
      type: this.props.type,
      onBlur: () => this.onBlur(),
      onChange: e => this.onChange(e.target.value)
    })
    if (this.props.icon !== '') {
      _props = { ..._props, icon: this.props.icon, iconPosition: 'left' }
    }
    if (this.props.formField) {
      return (
        <Form.Field>
          <label>{this.props.label}</label>
          <Input {..._props} />
        </Form.Field>
      )
    }
    return (<Input {..._props} />)
  }
}

export default ValidatedInput
