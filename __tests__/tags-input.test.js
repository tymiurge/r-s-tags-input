import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow, mount } from 'enzyme'
import React from 'react'
import TagsInput from './../src/tags-input'

configure({ adapter: new Adapter() });

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
    expect(component.find('div[className="ui small label"]').length).toBe(tagsFlatArray.length)
})