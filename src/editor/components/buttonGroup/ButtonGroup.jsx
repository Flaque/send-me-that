import React from 'react';

class ButtonGroup extends React.Component {
  render() {
    return (
      <div className="buttonGroup">
        <button id="run" className="primary" onClick={this.props.onRun}> Run </button>

        {this.props.showInsert &&
          <button id="insert" onClick={this.props.onInsert}> Insert </button>
        }
      </div>
    )
  }
}

export default ButtonGroup;
