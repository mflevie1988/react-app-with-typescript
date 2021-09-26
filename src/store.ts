import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as connectedRouterMiddleware } from 'connected-react-router';
import { BrowserHistoryBuildOptions, createBrowserHistory } from 'history';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createRootReducer from './reducers';
import rootSaga from './sagas';

export function configureStore(basePath: string) {
  const IS_PRODUCTION = process.env.NODE_ENV === 'production';

  const historyOptions: BrowserHistoryBuildOptions = {
    basename: basePath
  };
  const history = createBrowserHistory(historyOptions);

  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = connectedRouterMiddleware(history);
  const middleware = IS_PRODUCTION
    ? applyMiddleware(sagaMiddleware, routerMiddleware)
    : applyMiddleware(reduxImmutableStateInvariant(), sagaMiddleware, routerMiddleware);

  const store = createStore(
    createRootReducer(history),
    compose(middleware, (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f) => f)
  );

  sagaMiddleware.run(rootSaga);

  if (!IS_PRODUCTION && !(window as any).devToolsExtension) {
    // tslint:disable-next-line
    console.warn(`#fedlove ♥\n
    Download Redux DevTools for a better dev experience\n
    https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
    `);
  }

  return {
    history,
    store
  };
}
