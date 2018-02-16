import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import React from 'react'
import Tag from './../src/tag'

configure({ adapter: new Adapter() });

const elms = {
    tagByText: text => '[text="' + text + '"]',
    removeIcon: () => 'Icon[name="delete"]'
}

test('tag with specific text is rendered inside the Tag component', () => {
    expect(
        shallow(<Tag text='tag1' />).find(elms.tagByText('tag1')).length
    ).toBe(1)
})

test('tag has remove button if removable = true', () => {
    expect(
        shallow(<Tag text='tag1' removable />).find(elms.removeIcon()).length
    ).toBe(1)
})

test('tag has NO remove button if removable not defined', () => {
    expect(
        shallow(<Tag text='tag1' />).find(elms.removeIcon()).length
    ).toBe(0)
})

test('onRemoveClick callbeck is called by clicking on remove button', () => {
    const onRemoveClickMock = jest.fn();
    shallow(<Tag text='tag1' removable onRemoveClick={onRemoveClickMock} />)
        .find(elms.removeIcon())
        .simulate('click')
    expect(onRemoveClickMock.mock.calls.length).toBe(1)
})
