import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';

class CodeEditor extends React.Component {

  updateCode(newCode) {
    this.setState({
      code: newCode
    })
    this.props.onCodeChange(newCode);
  }

  constructor(props) {
    super(props)
    this.state = { code: this.props.initialCode }
    this.updateCode = this.updateCode.bind(this)

    this.options = {
      lineNumbers: true,
      mode: 'javascript'
    }
  }

  render() {
    return (
      <CodeMirror
      className='bordered'
      value={this.state.code}
      onChange={this.updateCode}
      options={this.options} />
    )
  }
}

export default CodeEditor;
