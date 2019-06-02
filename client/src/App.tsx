import React, { FC } from 'react';
import { createStore, Store, applyMiddleware, StoreEnhancer, compose } from 'redux';
import { rootReducer } from './store/rootReducer';
import { ApplicationState, ApplicationAction } from './store/constants';
import { Provider } from 'react-redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { rootSaga } from './store/rootSaga';
import { createBrowserHistory, History } from 'history';
import { Router, Switch, Route } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Person from './modules/Person';

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const windowIfDefined = typeof window === 'undefined'
  ? null
  : window as Window & { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: (a: any) => any };

const composeEnhancers = (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middleware: StoreEnhancer = applyMiddleware(sagaMiddleware);

const composedMiddlewares = composeEnhancers(middleware as any);

const store: Store<ApplicationState, ApplicationAction> = createStore(rootReducer, {}, composedMiddlewares);

sagaMiddleware.run(rootSaga);

const history: History = createBrowserHistory();

export const gridConfig = {
  space: [0, 4, 8, 16, 24, 32, 48],
  breakpoints: [520, 720, 900, 1080, 999999],
};

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={gridConfig} >
        <Router history={history}>
          <Switch>
            <Route path={'/'} component={Person} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
