import React, {Component} from 'react';

//importar redux provider
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

import AppLayout from './src/App';
import Loading from './src/sections/components/Loading';
type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
