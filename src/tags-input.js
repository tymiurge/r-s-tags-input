import React from 'react'
import PropTypes from 'prop-types'
import { Input, Label, Form, Icon } from 'semantic-ui-react'
import Tag from './tag'

export default class extends React.Component {

    static propTypes = {
        tags: PropTypes.array.isRequired,    
    }

    /*
    item: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                text: PropTypes.string.isRequired,
                color: PropTypes.string,
                removable: PropTypes.bool
            })
        ]).isRequired
    */

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

    deleteTag = (tag) => {
        const newTags = this.state.tags.filter(t => tag !== t)
        this.setState(
            Object.assign({}, this.state, { tags: newTags })
            /*,
            () => { 
                this.props.onTagRemove && this.props.onTagRemove(tag)
                this.props.onChange(this.state.tags) 
            }
            */
        )
    }

    render () {
        return (
            <Form>
                <Form.Group>
                    {
                        this.state.tags.map((tag, idx) => {
                            return <Tag key={idx} text={tag} removable onRemoveClick={this.deleteTag} />
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