import React from 'react'
import PropTypes from 'prop-types'
import { Input, Label, Form, Icon } from 'semantic-ui-react'
import Tag from './tag'
import { relative } from 'path';


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
        this.setState({...this.state, inputValue: newValue})
    }

    addTagFromInput = newTag => {
        const tags = [...this.state.tags, newTag]
        this.setState(
            { ...this.state, tags, inputValue: ''},
            () => this.props.onTagAdd(newTag)
        )
    }

    catchTagSubmit = ({key}) => {
        if (key !== 'Enter') return
        const newTag = this.state.inputValue
        const notDuplication = !this.state.tags.some(item => {
            return item === newTag
        })
        const isNotEmpty = newTag !== ''
        if (notDuplication && isNotEmpty) this.addTagFromInput(newTag)
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
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    this.state.tags.map((tag, idx) => {
                        return <Tag key={idx} text={tag} removable color='blue' onRemoveClick={this.deleteTag} className='tagitem' />
                    })
                }
                <Input transparent placeholder={this.props.placeholder}
                    style={{marginLeft: '0.3em', width: 'auto'}}
                    value={this.state.inputValue}
                    onChange={this.updateInputValue.bind(this)}
                    onKeyPress={this.catchTagSubmit}
                />
            </div>
        )
    }
}
