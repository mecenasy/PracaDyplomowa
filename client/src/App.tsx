import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ReactCookieProps, CookiesProvider } from 'react-cookie';
import { ThemeProvider } from 'styled-components';
import Person from './modules/Person';
import { store, gridConfig } from './store/configureStore';
import LogoutButton from './modules/LogoutButton/LogoutButton';
import MenuItem from './modules/Menu/MenuItem/MenuItem';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthorizationRoute from './modules/Router/AuthorizationRoute';
import RedirectFromLogin from './modules/Router/RedirectFromLogin';
import Login from './modules/Login/Login';

const App: FC<ReactCookieProps> = (props) => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <ThemeProvider theme={gridConfig} >
          <div style={{ padding: '20px' }}>
            <BrowserRouter>
              <MenuItem link={'/admin'} color={'blue'} icon={'sdasdadadad'} leftBarMenu={true} />
              <LogoutButton />
              <RedirectFromLogin />
              <Route path={'/login'} component={Login} />
              <AuthorizationRoute authorizedRole={['student']} path={'/student'} component={Person} >

              </AuthorizationRoute>
              <AuthorizationRoute authorizedRole={['teacher']} path={'/teacher'} component={Person} >

              </AuthorizationRoute>
              <AuthorizationRoute authorizedRole={['admin']} path={'/admin'} component={Person} >

              </AuthorizationRoute>
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </Provider>
    </CookiesProvider>
  );
};

export default App;
