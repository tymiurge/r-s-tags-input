import React from 'react'
import { Menu } from 'semantic-ui-react'

const Header = ({ title }) => (
  <Menu inverted style={{borderRadius: 0}}>
    <Menu.Item header>{title}</Menu.Item>
  </Menu>
)

export default Header 
