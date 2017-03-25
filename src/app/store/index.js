/**
 * Created by leonardli on 3/25/17.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
let composeEnhancer = compose;
if (process.env.NODE_ENV !== 'production') {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;