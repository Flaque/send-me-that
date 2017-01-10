import React from 'react';
import CodeEditor from '../codeEditor/CodeEditor.jsx';
import Output from '../output/Output.jsx';
import ButtonGroup from '../buttonGroup/ButtonGroup.jsx';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { code: '', runnableCode: '' }
    this.onRun = this.onRun.bind(this);
    this.onInsert = this.onInsert.bind(this);
    this.onCodeChange = this.onCodeChange.bind(this);
  }

  onRun() {
    this.setState((prevState) => ({
      runnableCode : prevState.code
    }))
  }

  onInsert() {
    console.log("Insert button pressed");
  }

  onCodeChange(value) {
    this.setState({code: value})
  }

  render() {
    return (
      <div className="app card">
        <CodeEditor onCodeChange={this.onCodeChange} />
        <Output code={this.state.runnableCode}/>
        <ButtonGroup onRun={this.onRun} onInsert={this.onInsert}/>
      </div>
    )
  }
}

export default App;
