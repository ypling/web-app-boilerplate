/**
 * Created by leonardli on 3/24/17.
 */
import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import ExampleList from './components/ExampleList';
import StatelessComponent from './components/StatelessComponent';
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <ExampleList/>
          <StatelessComponent/>
        </div>
      </Provider>
    )
  }
}

export default App;