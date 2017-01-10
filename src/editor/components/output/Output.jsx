import React from 'react';
import Frame from 'react-frame-component';
import {reroute} from './reroute.js';

class Output extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    //Only update if code is new
    return (nextProps.code !== this.props.code)
  }

  componentDidUpdate() {

    /**
     * Clear the console by directly accessing the DOM outside
     * of react. This is NOT normally a good practice, but since
     * we're allowing code in from the user, it's necessary in this
     * case.
     */
    this.directlyAccessDOMAndClearConsoleDangerously()

    /**
     * Eval is dangerous, we're using this because we're required to.
     * That said:
     * https://javascriptweblog.wordpress.com/2010/04/19/how-evil-is-eval/
     */
    let evalCode = () => { eval(this.props.code) }

    /**
     * Reroute any console commands to our DOM output.
     */
    reroute(evalCode) // This will update #console !
  }

  /**
   * Clears the console.
   * Excessively long name so you explicitly know that this will directly
   * access the DOM, which you should normally not do in react.
   */
  directlyAccessDOMAndClearConsoleDangerously() {
    let domConsole = document.getElementById('console');
    domConsole.innerHTML = ''
  }

  render() {
    return (
      <div className="output bordered">
        <div id="console">
          {/* Populates <div class="console-item">'s in reroute */}
        </div>
      </div>
    )
  }
}

export default Output;
