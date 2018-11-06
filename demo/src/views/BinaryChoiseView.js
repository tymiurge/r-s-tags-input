import React from 'react'
import { Controls } from '../../../src'
import { Message, Segment } from 'semantic-ui-react'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

export default () => (
  <div>
    <Controls.BinaryChoise
      onNoClick={() => alert(`onNoClick`)}
      onYesClick={() => alert(`onYesClick`)}
    />

    <Message
      attached
      header='Controls.BinaryChoise code example'
    />
    <Segment attached='bottom'>
      <AceEditor
        width={'100%'}
        height={'500px'}
        mode="javascript"
        theme="monokai"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
        value={
        `
        <Controls.BinaryChoise
          onNoClick={() => alert('onNoClick')}
          onYesClick={() => alert('onYesClick')}
        />
        `
        }
      />
    </Segment>
    
  </div>
)
