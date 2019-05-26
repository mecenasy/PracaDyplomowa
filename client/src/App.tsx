import React from 'react';
import { createStore, Store, applyMiddleware, StoreEnhancer } from 'redux'
import { rootReducer } from './store/rootReducer';
import { ApplicationState, ApplicationAction } from './store/constance';
import { Provider } from 'react-redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { rootSaga } from './store/rootSaga';
import { createBrowserHistory, History } from 'history';
import { Router, Switch, Route } from 'react-router';
import { ThemeProvider } from 'styled-components';

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const middleware: StoreEnhancer = applyMiddleware(sagaMiddleware)

const store: Store<ApplicationState, ApplicationAction> = createStore(rootReducer, {}, middleware);

sagaMiddleware.run(rootSaga);

const history: History = createBrowserHistory();

export const gridConfig = {
  space: [0, 4, 8, 16, 24, 32, 48],
  breakpoints: [520, 720, 900, 1080, 999999],
};

const Dupa = () => (<div>dsjhfgsjfkhsfjkhsdfjkshfg</div>)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={gridConfig} >
        <Router history={history}>
          <Switch>
            <Route path={'/'} component={Dupa} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
