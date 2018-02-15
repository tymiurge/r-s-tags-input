import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import React from 'react'
import Tag from './../src/tag'

configure({ adapter: new Adapter() });

// https://github.com/how-to-react/nwb-jest

test('tag with specific text is rendered inside the Tag component', () => {
    const wrapper = shallow(<Tag text='tag1' />);
    expect(
        wrapper.find('[text="tag1"]').length
    ).toBe(1)
    
});