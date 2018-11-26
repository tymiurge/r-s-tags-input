import React from 'react'
import CodeViewer from './private/CodeViewer'
import { Segment, Header } from 'semantic-ui-react'
import { Tags } from './../../../src'

export default class extends React.Component {

  state = {
    tags: ['eng', 'fr', 'linux']
  }
  render() {
    return (
      <div>
     <Tags.TagsInput
        tags={this.state.tags}
        placeholder={'tag and enter'}
        asSegment={true}
        onTagAdd={(tag, allTags) => alert(allTags.join())}
        onTagRemove={(tag, allTags) => alert(allTags.join())}
        onChange={tags => this.setState({...this.state, tags})}
      /> 

      <Segment>
        <Header as='h5'>Current content: </Header>
        <div>
          {this.state.tags.join(', ')}
        </div>
      </Segment>

      <CodeViewer
        title='Tags.TagsInput code example'
        code={
`
<Tags.TagsInput
  tags={['eng', 'fr', 'linux']}
  placeholder={'tag and enter'}
  asSegment={true}
  onTagAdd={(tag, allTags) => alert(allTags.join())}
  onTagRemove={(tag, allTags) => alert(allTags.join())}
/> 
`
      }
      />
  </div>
    )
  }
}
  