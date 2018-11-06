import React from 'react'
import { Controls } from '../../../src'
import CodeViewer from './private/CodeViewer'

export default () => (
  <div>
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
      title='Controls.ValidatedInput code example'
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
    />
    
  </div>
)

