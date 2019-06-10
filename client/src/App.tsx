import React, { FC } from 'react';
import { Provider } from 'react-redux';
import {  ReactCookieProps } from 'react-cookie';
import { Router, Switch, Route } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Person from './modules/Person';
import Login from './modules/Login/Login';
import { store, gridConfig, history } from './store/configureStore';
import LogoutButton from './modules/LogoutButton/LogoutButton';
import redirectToLogin from './modules/Router/redirectToLogin';

const App: FC<ReactCookieProps> = (props) => {
  console.log("TCL: props", props)
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
          <LogoutButton />
          <Switch>
            <div style={{ padding: '20px' }}>
              <Route path={'/'} exact component={redirectToLogin(null, '/login')} />
              <Route path={'/login'} component={redirectToLogin(Login, '/person', true)} />
              <Route path={'/person'} component={redirectToLogin(Person, '/login')} />
            </div>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
