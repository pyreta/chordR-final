import { createStore, applyMiddleware, compose } from 'redux';
import { createHashHistory } from 'history';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducer';
import initialState from './initialState';

const history = createHashHistory();

const configureStore = () => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  // Skip redux logs in console during the tests
  if (process.env.NODE_ENV !== 'test') {
    middleware.push(logger);
  }

  // Redux DevTools Configuration
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
    })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducer', () =>
      store.replaceReducer(require('../reducer'))); // eslint-disable-line global-require
  }

  return store;
};

export default { configureStore, history };
