import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Person from './modules/Person';
import login from './modules/Login/Login';
import { store, gridConfig, history } from './store/configureStore';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={gridConfig} >
        <Router history={history}>
          {/* <div style={{ padding: '20px' }}>
            <Login alertMassage={''} />
          </div> */}
          {/* <Person />
            <Person />
            <Person />
            <Person />
          <Person /> */}
          <Switch>
            <div style={{ padding: '20px' }}>
              <Route path={'/'} component={login} />
              <Route path={'/person'} component={Person} />
            </div>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
