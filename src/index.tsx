import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import App from './components/App';
import { Provider } from 'react-redux';
import { configureStore } from 'store';
import Routes from 'constants/routes';

const { history, store } = configureStore(Routes.basePath);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
