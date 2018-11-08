import React from 'react'
import CodeViewer from './private/CodeViewer'
import { Tags } from './../../../src'

export default () => (
  <div>
     <Tags.TagsInput
        tags={['eng', 'fr', 'linux']}
        placeholder={'tag and enter'}
        asSegment={true}
        onTagAdd={(tag, allTags) => alert(allTags.join())}
        onTagRemove={(tag, allTags) => alert(allTags.join())}
      /> 

      <CodeViewer
        title='Tags.TagsInput code example'
        code={`
        <Tags.TagsInput
        tags={['eng', 'fr', 'linux']}
        placeholder={'tag and enter'}
        /> 
        `}
      />
  </div>
)