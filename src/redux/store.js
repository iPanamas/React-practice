import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from './counter/counter-reducer';

const counterInitialState = {
  value: 10,
  step: 5,
};

const rootRaducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootRaducer, composeWithDevTools());

export default store;
