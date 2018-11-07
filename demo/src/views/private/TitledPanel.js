import React from 'react'
import { Message, Segment } from 'semantic-ui-react'

export default ({title, children}) => (
  <div>
    <Message
      attached
      header={title}
    />
    <Segment attached='bottom'>
      { children }
    </Segment>
  </div>
)
