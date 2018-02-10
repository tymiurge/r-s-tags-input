import React from 'react'
import PropTypes from 'prop-types'
import { Input, Label, Form, Icon } from 'semantic-ui-react'

export default class extends React.Component {

    static propTypes = {
        tags: PropTypes.array.isRequired,    
    }

    state = {
        inputValue: '',
        tags: this.props.tags
    }

    updateInputValue (e) {
        const newValue = e.target.value
        this.setState(Object.assign(
          {}, this.state, {inputValue: newValue}
        ))
    }

    catchTagSubmit = (e) => {
        
    }

    render () {
        return (
            <Form>
                <Form.Group>
                    {
                        this.state.tags.map((tag, idx) => {
                            return (
                                <Form.Field key={idx}>
                                    <Label size="small">
                                        {tag}
                                        <Icon 
                                            name="delete" 
                                            link 
                                            // onClick={this.deleteTag.bind(this, tag)}
                                        />
                                  </Label>
                                </Form.Field>
                            )
                        })
                    }
                    <Form.Field>
                        <Input transparent placeholder={'props.placeholder'}
                            value={this.state.inputValue}
                            onChange={this.updateInputValue.bind(this)}
                            onKeyPress={this.catchTagSubmit}
                        />
                    </Form.Field>
                </Form.Group>
            </Form>
        )
    }
}