import React from 'react'
import {render} from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { Tags, Layouting } from '../../src'

{/* <div>
      <h1>r-s-tags-input Demo</h1>
      <Tags.TagsInput
        tags={['eng', 'fr', 'linux']}
        placeholder={'tag and enter'}
      />
    </div> */}
class Demo extends React.Component {
  render() {
    return (
      <Layouting.FullSizePage
        header={(<div style={{backgroundColor: 'blue', color: 'white'}}>HEADER</div>)}
        footer={(<div style={{backgroundColor: 'blue', color: 'white'}}>FOOTER</div>)}
        leftAside={(
          <div style={{backgroundColor: 'yellow'}}>
            LEFT ASIDE CAN BE SCROLLABLE:
            {
              Array.from(Array(50).keys()).map(el => (<p key={el}>{el}</p>))
            }
          </div>
        )}
        rightAside={(
          <div style={{backgroundColor: 'yellow'}}>
            scrollable, too: 
            {
              Array.from(Array(50).keys()).map(el => (<p key={el}>{el}</p>))
            }
          </div>
        )}
        main={(<div>MAIN</div>)}
        leftAsideWidth='35%'
      />
    ) 
  }
}

render(<Demo/>, document.querySelector('#demo'))
