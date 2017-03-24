/**
 * Created by leonardli on 3/24/17.
 */
import React, {Component, PropTypes} from 'react';
import StatelessComponent from './components/StatelessComponent';
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div>
        Hello world
        <StatelessComponent/>
      </div>
    )
  }
}

export default App;