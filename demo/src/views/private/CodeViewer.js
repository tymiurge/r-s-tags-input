import React from 'react'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'
import PropTypes from 'prop-types'

const propTypes = {
  height: PropTypes.number,
  code: PropTypes.string
}

const defaultProps = {
  height: 300,
  code: ''
}

const CodeViewer = props => (

  <AceEditor
    width={'100%'}
    height={`${props.height}px`}
    mode="javascript"
    theme="monokai"
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true}}
    value={props.code}
  />

)

CodeViewer.propTypes = propTypes
CodeViewer.defaultProps = defaultProps

export default CodeViewer
