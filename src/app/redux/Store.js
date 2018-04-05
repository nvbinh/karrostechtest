import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {syncHistoryWithStore, routerReducer} from "react-router-redux";
import {BrowserHistory} from "react-router";
import {bindActionCreators} from "redux";
import DefaultState from "./DefaultState";
import * as actionCreators from "./Actions";
import * as reducers from "./Reducers";

const rootReducer = combineReducers({...reducers, routing: routerReducer});
const enhancers = compose(
  applyMiddleware(thunk),
  applyMiddleware(logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const Store = createStore(rootReducer, DefaultState, enhancers);
export default Store;

export function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}