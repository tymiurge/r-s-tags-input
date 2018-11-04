import React from 'react'
import {render} from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import { Tags, Layouting } from '../../src'
import { List } from 'semantic-ui-react'
import Header from './header'

const demos = [
  {
    title: 'TagsInput',
    content: () => (
      <Tags.TagsInput
        tags={['eng', 'fr', 'linux']}
        placeholder={'tag and enter'}
      />  
    )
  },
  {
    title: 'FullSize Layout',
    content: () => (
      <div>
        {`
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
        `}
      </div>
    )
  }
]

{/* <div>
      <h1>r-s-tags-input Demo</h1>
      <Tags.TagsInput
        tags={['eng', 'fr', 'linux']}
        placeholder={'tag and enter'}
      />
    </div> */}

    // <Layouting.FullSizePage
    //     header={(<div style={{backgroundColor: 'blue', color: 'white'}}>HEADER</div>)}
    //     footer={(<div style={{backgroundColor: 'blue', color: 'white'}}>FOOTER</div>)}
    //     leftAside={(
    //       <div style={{backgroundColor: 'yellow'}}>
    //         LEFT ASIDE CAN BE SCROLLABLE:
    //         {
    //           Array.from(Array(50).keys()).map(el => (<p key={el}>{el}</p>))
    //         }
    //       </div>
    //     )}
    //     rightAside={(
    //       <div style={{backgroundColor: 'yellow'}}>
    //         scrollable, too: 
    //         {
    //           Array.from(Array(50).keys()).map(el => (<p key={el}>{el}</p>))
    //         }
    //       </div>
    //     )}
    //     main={(<div>MAIN</div>)}
    //     leftAsideWidth='35%'
    //   />
class Demo extends React.Component {

  state = {selected: 0}

  renderMain = () => {
    const DemoComponent = demos[this.state.selected].content
    return <DemoComponent />
  }

  handleSelection = idx => this.setState({...this.state, selected: idx})

  render() {
    return (
      <Layouting.FullSizePage
        header={<Header title={demos[this.state.selected].title} />}
        leftAside={(
          <List selection>
            {
              demos.map((demo, idx) => (
                <List.Item 
                  key={idx} 
                  active={this.state.selected === idx}
                  onClick={() => this.handleSelection(idx)}
                >
                  <List.Header>{demo.title}</List.Header>
                </List.Item>      
              ))
            }
          </List>
        )}
        rightAside={(
          <div style={{backgroundColor: 'yellow'}}>
            scrollable, too: 
            {
              Array.from(Array(50).keys()).map(el => (<p key={el}>{el}</p>))
            }
          </div>
        )}
        main={(
          <div style={{padding: '20px'}}>
            { this.renderMain()}
          </div>
        )}
        leftAsideWidth='15%'
        rightAsideWidth='0%'
      />
    ) 
  }
}

render(<Demo/>, document.querySelector('#demo'))
