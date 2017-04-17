/**
 * Created by leonardli on 3/25/17.
 */
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

export const history = createHistory();

const router = routerMiddleware(history);

let composeEnhancer = compose;
if (process.env.NODE_ENV !== 'production') {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = createStore(combineReducers({...reducers, router:routerReducer}), composeEnhancer(applyMiddleware(thunk, router)));

export default store;
