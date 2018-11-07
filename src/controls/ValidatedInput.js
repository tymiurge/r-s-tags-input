import React from 'react'
import { Input, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { validation } from './../utils'

const _validate = (value, validators) => validation.validateAgainstArr(value, validators)

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
    label: PropTypes.string,
    onEnter: PropTypes.func
  }

  static defaultProps = {
    value: '',
    validators: [],
    fieldBinding: null,
    onChange: () => {},
    onEnter: () => {},
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
    const valid = _validate(value, this.props.validators)
    this.setState(
      { ...this.state, value, valid },
      () => this.props.onChange(this.props.fieldBinding, value, this.state.valid)
    )
  }

  onBlur = () => {
    const valid = _validate(this.state.value, this.props.validators)
    this.setState(
      { ...this.state, valid },
      () => this.props.onChange(this.props.fieldBinding, this.state.value, valid)
    )
  }

  onKeyPress = key => {
    if (key === 'Enter' && this.state.valid) {
      this.props.onEnter(this.state.value)
    }
  }

  render() {
    let _props = Object.assign({
      fluid: true,
      placeholder: this.props.placeholder,
      value: this.state.value,
      className: this.state.valid ? '' : 'error-state',
      type: this.props.type,
      onBlur: () => this.onBlur(),
      onChange: e => this.onChange(e.target.value),
      onKeyPress: e => this.onKeyPress(e.key)
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
