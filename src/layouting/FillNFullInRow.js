import React from 'react'
import { propTypesBooster } from './../utils'

const propTypes = propTypesBooster({}).withExactChildrenNumber(2)

const FillNFullInRow = props => (
  <div style={{marginTop: '.5em', marginBottom: '.5em'}}>
  <div
    style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}
  >
    <div>
      { props.children[0] }
    </div>
    <div style={{flex: '1 1 auto'}}>
      { props.children[1] }
    </div>
  </div>
  </div>
)

FillNFullInRow.propTypes = propTypes

export default FillNFullInRow
