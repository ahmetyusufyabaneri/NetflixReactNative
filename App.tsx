import React from 'react';
import './global.css';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
