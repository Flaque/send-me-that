import React from 'react';

class ButtonGroup extends React.Component {
  render() {
    return (
      <div className="buttonGroup">
        <button onClick={this.props.onRun}> Run </button>
        <button onClick={this.props.onInsert}> Insert </button>
      </div>
    )
  }
}

export default ButtonGroup;
