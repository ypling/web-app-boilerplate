/**
 * Created by leonardli on 3/24/17.
 */
import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import store, {history} from './store';
import ExampleList from './components/ExampleList';
import StatelessComponent from './components/StatelessComponent';
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={ExampleList}/>
            <Route path="/about" component={StatelessComponent}/>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App;