import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow, mount, render } from 'enzyme'
import React from 'react'
import TagsInput from './../src/tags-input'
import Tag from './../src/tag'

configure({ adapter: new Adapter() });
/*
TODO: come up with a page object helper
function Component(wrapper) {
    const compWrapper  = wrapper
    const selectors = {
        inputField: () => 'input',
        semanticInput: () => 'Input'
    }
    const actions = {
        enterText: value => { 
            compWrapper.find(selectors.inputField()).simulate('change', {target: {value}})
        },
        pressEnterInInput: () => {
            compWrapper.find(selectors.inputField()).simulate('keyPress', { keyCode: 13, key: 'Enter' })
        },
        addTag: tag => {
            this.enterText(tag)
            this.pressEnterInInput()
        } 
    }

    return {
        selectors, actions
    }
}
*/
test('quantity of tags equals to number of elements in tags as flat array property ', () => {
    const tagsFlatArray = ['tag1', 'tag2', 'tag3']
    const component = shallow(<TagsInput tags={tagsFlatArray} />)
    expect(
        tagsFlatArray.every(
            tagName => component.find('_class[text="' + tagName + '"]').length === 1
        )
    ).toBe(true)
})

test('pressing Enter in empty input does not add new tag', () => {
    const tagsFlatArray = ['tag1', 'tag2', 'tag3']
    const component = mount(<TagsInput tags={tagsFlatArray} />)
    const input = component.find('Input')
    input.simulate('keypress', {key: 'Enter'})
    expect(component.find(Tag).length).toBe(tagsFlatArray.length)
})

test('new tag is added, input cleared', () => {
    const tagsFlatArray = ['tag1', 'tag2', 'tag3']
    const component = mount(<TagsInput tags={tagsFlatArray} />)
    let input = component.find('input')
    input.simulate('change', {target: {value: 'sport'}})
    input.simulate('keyPress', { keyCode: 13, key: 'Enter' })
    expect(component.find(Tag).length).toBe(tagsFlatArray.length + 1)
})

test('input is cleared after entering new tag', () => {
    const tagsFlatArray = ['tag1', 'tag2', 'tag3']
    const component = mount(<TagsInput tags={tagsFlatArray} />)
    let input = component.find('input')
    input.simulate('focus')
    input.simulate('change', {target: {value: 'sport'}})
    input.simulate('keyPress', { keyCode: 13, key: 'Enter' })
    expect(component.find('Input').props().value).toBe('')
})

test('duplicated tag is not added', () => {
    const tagsFlatArray = ['tag1', 'tag2', 'tag3']
    const component = mount(<TagsInput tags={tagsFlatArray} />)
    const input = component.find('input')
    input.simulate('change', {target: {value: tagsFlatArray[0]}})
    input.simulate('keyPress', { keyCode: 13, key: 'Enter' })
    expect(component.find(Tag).length).toBe(tagsFlatArray.length)
})
