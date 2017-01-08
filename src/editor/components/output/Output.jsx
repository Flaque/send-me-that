import React from 'react';
import Frame from 'react-frame-component';

class Output extends React.Component {
  render() {
    const head = `<script>${this.props.code}</script>`;
    return (
      <div className="output">
        <Frame head={<script>{this.props.code}</script>}>
          <div id="console">
          </div>
        </Frame>
      </div>
    )
  }
}

export default Output;
