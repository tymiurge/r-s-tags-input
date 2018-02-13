import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { shallow } from 'enzyme'
//import Tag from './../src/tag'

// https://github.com/how-to-react/nwb-jest
const Tag = props => (
    <div>TAG</div>
)

configure({ adapter: new Adapter() });

function sum(a, b) {
    return a + b
}

test('adds 1 + 2 to equal 3', () => {
    const wrapper = shallow(<Tag text='tag1' />);
    expect(sum(1, 2)).toBe(3);
});