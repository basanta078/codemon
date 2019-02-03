// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import createStore from '../store';
import { LoadingView } from 'AppComponents';
import { PersistGate } from 'redux-persist/lib/integration/react';
let storage;
let store;
let persistor;
class AppStoreProvider extends PureComponent {
  getChildContext() {
    return {
      store,
    };
  }

  static childContextTypes = {
    store: PropTypes.shape({})
  };

  render() {
    const { children } = this.props;
    if (!storage){
      storage  = createStore();
      store = storage.store;
      persistor = storage.persistor;
    }
    return (
      <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }
}

export default AppStoreProvider;
