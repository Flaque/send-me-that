import React from 'react';
import CodeEditor from '../codeEditor/CodeEditor.jsx';
import Output from '../output/Output.jsx';
import ButtonGroup from '../buttonGroup/ButtonGroup.jsx';


let DEFAULT_CODE = `// Type your code here!
console.log("Hello MixMax!");`

class App extends React.Component {

  constructor(props) {
    super(props)

    let showInsert = true

    // We are running from /scriptrunner (opened in a sent email)
    if (window.set_code) {
      DEFAULT_CODE = window.set_code
      showInsert = false
    }

    this.state = {
      showInsert: showInsert,
      code: DEFAULT_CODE,
      runnableCode: '' }
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
    const code = this.state.code
    Mixmax.done({code: code}) //For production
  }

  onCodeChange(value) {
    this.setState({code: value})
  }

  render() {
    return (
      <div className="app card">
        <CodeEditor onCodeChange={this.onCodeChange} initialCode={DEFAULT_CODE} />
        <Output code={this.state.runnableCode}/>
        <ButtonGroup
          onRun={this.onRun}
          onInsert={this.onInsert}
          showInsert={this.state.showInsert}
        />
      </div>
    )
  }
}

export default App;
