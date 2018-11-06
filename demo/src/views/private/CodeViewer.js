import React from 'react'
import { Message, Segment } from 'semantic-ui-react'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

export default props => (
  <div>
    <Message
      attached
      header={props.title}
    />
    <Segment attached='bottom'>
      <AceEditor
        width={'100%'}
        height={'500px'}
        mode="javascript"
        theme="monokai"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
        value={props.code}
      />
    </Segment>
  </div>
)
