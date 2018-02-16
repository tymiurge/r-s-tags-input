import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
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