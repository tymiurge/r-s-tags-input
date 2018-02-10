import React from 'react'
import PropTypes from 'prop-types'
import { Input, Label, Form, Icon } from 'semantic-ui-react'

const Container = props => {
    if (props.color === '') {
        const {color, ...others} = props
        return (
            <Label {...others}>
                {props.children}
            </Label>
        )
    }
    return (
        <Label {...props} color={props.color} >
            {props.children}
        </Label>
    )
}

export default class extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        color: PropTypes.string,
        removable: PropTypes.bool,
        onRemoveClick: PropTypes.func
    }

    static defaultProps = {
        color: '',
        removable: false,
        onRemoveClick: () => {}
    }

    render () {
        const {removable, onRemoveClick, ...others} = this.props
        return (
            <Form.Field>
                <Container size="small" {...others}>
                    {this.props.text}
                    {
                        removable &&
                        <Icon 
                          name="delete" 
                            link 
                            onClick={onRemoveClick}
                        />
                    }
                </Container>
            </Form.Field>
        )
    }
}