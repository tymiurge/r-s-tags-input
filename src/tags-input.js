import React from 'react'
import PropTypes from 'prop-types'
import { Input, Label, Form, Icon } from 'semantic-ui-react'
import Tag from './tag'

export default class extends React.Component {

    static propTypes = {
        tags: PropTypes.array.isRequired,
        placeholder: PropTypes.string
    }

    static defaultProps = {
        placeholder: ''
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

    addTagFromInput = () => {
        const tags = [...this.state.tags, this.state.inputValue]
        this.setState(
            Object.assign({}, this.state, {tags, inputValue: ''})
            /*
            () => { 
                this.props.onTagAdd && this.props.onTagAdd(newTag) 
                this.props.onChange(this.state.tags)
            }
            */
        )

    }

    catchTagSubmit = ({key}) => key === 'Enter' ? this.addTagFromInput() : null

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
                        <Input transparent placeholder={this.props.placeholder}
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