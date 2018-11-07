import React from 'react'
import { propTypesBooster } from './../utils'

const propTypes = propTypesBooster({}).withExactChildrenNumber(2)

const FullNFillInRow = props => (
  <div style={{marginTop: '.5em', marginBottom: '.5em'}}>
  <div
    style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}
  >
    <div style={{flex: '1 1 auto'}}>
      { props.children[0] }
    </div>
    <div>
      { props.children[1] }
    </div>
  </div>
  </div>
)

FullNFillInRow.propTypes = propTypes

export default FullNFillInRow
