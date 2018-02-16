import React from 'react'
import PropTypes from 'prop-types'
import { Input, Label, Form, Icon } from 'semantic-ui-react'
import Tag from './tag'

export default class extends React.Component {

    static propTypes = {
        tags: PropTypes.array.isRequired,
        placeholder: PropTypes.string,
        onTagAdd: PropTypes.func,
        onTagRemove: PropTypes.func
    }

    static defaultProps = {
        placeholder: '',
        onTagAdd: () => {},
        onTagRemove: () => {}
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
        const newTag = this.state.inputValue
        const tags = [...this.state.tags, newTag]
        this.setState(
            Object.assign({}, this.state, {tags, inputValue: ''}),
            () => this.props.onTagAdd(newTag)
        )
    }

    //catchTagSubmit = ({key}) => key === 'Enter' && this.state.inputValue !== '' ? this.addTagFromInput() : null
    catchTagSubmit = ({key}) => {
        const isInputEmpty = this.state.inputValue !== ''
        return key === 'Enter' &&  isInputEmpty ? this.addTagFromInput() : null
    }

    deleteTag = (tag) => {
        const newTags = this.state.tags.filter(t => tag !== t)
        this.setState(
            Object.assign({}, this.state, { tags: newTags }),
            () => this.props.onTagRemove(tag)
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