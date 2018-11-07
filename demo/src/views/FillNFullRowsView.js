import React from 'react'
import { Layouting, Controls } from '../../../src'
import { Segment, Input } from 'semantic-ui-react'
import TitledPanel from './private/TitledPanel'
import CodeViewer from './private/CodeViewer'

export default () => (
  <div>
    <TitledPanel title='FillNFullInRow and FullInFillInRow examples'>
      <Segment>
        <Layouting.FillNFullInRow>
          <Controls.BinaryChoise
            onYesClick={() => alert('yes clicked')}
            onNoClick={() => alert('no clicked')}
          />
          <Input fluid placeholder='input fulls here remaining space' />
        </Layouting.FillNFullInRow>
      </Segment>

      <Segment>
        <Layouting.FullNFillInRow>
          <Input fluid placeholder='input fulls here remaining space' />
          <Controls.BinaryChoise
            onYesClick={() => alert('yes clicked')}
            onNoClick={() => alert('no clicked')}
          />
        </Layouting.FullNFillInRow>
      </Segment>
      <br/>
      <CodeViewer
        code={
  `
<Layouting.FillNFullInRow>

  <Controls.BinaryChoise
    onYesClick={() => alert('yes clicked')}
    onNoClick={() => alert('no clicked')}
  />
  
  <Input fluid placeholder='input fulls here remaining space' />
</Layouting.FillNFullInRow>

<Layouting.FullNFillInRow>
  <Input fluid placeholder='input fulls here remaining space' />
  <Controls.BinaryChoise
    onYesClick={() => alert('yes clicked')}
    onNoClick={() => alert('no clicked')}
  />
</Layouting.FullNFillInRow>
  `
        }
      />
    </TitledPanel>
  </div>
)