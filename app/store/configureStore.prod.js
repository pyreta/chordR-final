import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import rootReducer from '../reducer';
import initialState from './initialState';

const history = createBrowserHistory();

function configureStore() {
  return createStore(rootReducer, initialState);
}

export default { configureStore, history };
