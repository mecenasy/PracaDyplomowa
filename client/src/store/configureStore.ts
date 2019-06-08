import { createBrowserHistory, History } from 'history';
import { Store, createStore, applyMiddleware, StoreEnhancer, compose } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { rootReducer } from './rootReducer';
import { ApplicationState, ApplicationAction } from './constants';
import { rootSaga } from './rootSaga';

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const windowIfDefined = typeof window === 'undefined'
  ? null
  : window as Window & { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: (a: any) => any };

const composeEnhancers = (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middleware: StoreEnhancer = applyMiddleware(sagaMiddleware);

const composedMiddlewares = composeEnhancers(middleware as any);

export const store: Store<ApplicationState, ApplicationAction> = createStore(rootReducer, {}, composedMiddlewares);

sagaMiddleware.run(rootSaga);

export const history: History = createBrowserHistory();

export const gridConfig = {
  space: [0, 4, 8, 16, 24, 32, 48],
  breakpoints: [520, 720, 900, 1080, 999999],
};

