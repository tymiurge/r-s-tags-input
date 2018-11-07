import React from 'react'
import { Controls } from '../../../src'
import CodeViewer from './private/CodeViewer'
import TitledPanel from './private/TitledPanel'

export default () => (
  <div>
    <TitledPanel title='Controls.ValidatedInput with onChange prop usage'>

      <Controls.ValidatedInput
        placeholder={'Job Title'}
        formField={true}
        label={'Job Title'}
        validators={[
          value => value !== ''
        ]}
        fieldBinding='jobTitles'
        onChange={
          (fieldName, value, valid) => console.log(`fieldName = ${fieldName}, value = ${value}, valid = ${valid}`)
        }
      />
      <br/>

      <CodeViewer
        code={`
        <Controls.ValidatedInput
          placeholder={'Job Title'}
          formField={true}
          label={'Job Title'}
          validators={[
            value => value !== ''
          ]}
          fieldBinding='jobTitles'
          onChange={
            (fieldName, value, valid) => console.log(\`fieldName = \${fieldName}, value = \${value}, valid = \${valid}\`)
          }
        />
        `}
        height={190}
      />
    </TitledPanel>
    <br/>
    <TitledPanel title='Controls.ValidatedInput with onEnter prop usage'>
      <Controls.ValidatedInput
        placeholder={'Job Title'}
        formField={true}
        label={'Job Title'}
        validators={[
          value => value !== ''
        ]}
        fieldBinding='jobTitles'
        onEnter={text => alert(text)}
      />
      <br/>
      <CodeViewer
        code={`
        <Controls.ValidatedInput
          placeholder={'Job Title'}
          formField={true}
          label={'Job Title'}
          validators={[
            value => value !== ''
          ]}
          fieldBinding='jobTitles'
          onEnter={text => alert(text)}
        />
        `}
        height={170}
      />
    </TitledPanel>
  </div>
)

