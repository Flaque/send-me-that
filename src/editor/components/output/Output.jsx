import React from 'react';
import Frame from 'react-frame-component';
import {reroute} from './reroute.js';

class Output extends React.Component {

  componentDidUpdate() {

    /**
     * Eval is dangerous, we're using this because we're required to.
     * That said:
     * https://javascriptweblog.wordpress.com/2010/04/19/how-evil-is-eval/
     */
    let evalCode = () => { eval(this.props.code) }

    /**
     * Reroute any console commands to our DOM output.
     */
    reroute(evalCode)
  }

  render() {

    return (
      <div className="output">
        <div id="console">
        </div>
      </div>
    )
  }
}

export default Output;
