//  @flow

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { compact } from 'lodash';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';


import rootReducer from './reducers';
import sagas from './sagas';

export default function initializeStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = compact([
    thunk.withExtraArgument(),
    sagaMiddleware,
    __DEV__ ? createLogger() : null
  ]);

  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middlewares))
  );

  persistStore(
    store,
    null,
    () => {
      store.getState();
    }
  );

  sagaMiddleware.run(sagas);

  return store;
}
