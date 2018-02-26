import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import TagsInput from './tags-input'

export { TagsInput }

export default class extends Component {
  
  render() {
    return ( 
      <TagsInput
        tags={['eng', 'fr', 'linux']}
        placeholder={'tag and enter'}
      />
    )
  }
}


