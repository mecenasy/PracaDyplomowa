import React, { FC } from 'react';
import { User } from '../../store/User/constants';
import { MapStateToProps, connect } from 'react-redux';
import { ApplicationState } from '../../store/constants';
import { RouteProps } from 'react-router';
import { Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';

interface AuthorizationRoute extends RouteComponentProps {
  authorizedRole: string[];
}

const AuthorizationRoute: FC<AuthorizationRoute & User & RouteProps> = (props) => {
  const { authorizedRole, name, role, userId, children, component, ...restProps } = props;
  const authorized = userId && authorizedRole.some((authRole) => authRole === role);
  if (!authorized && props.location.pathname === props.path) {
    return (<Redirect to={'/login'} />);
  }

  return (
    <Route {...restProps} component={component}>
      {children}
    </Route>
  );
};

const mapStateToProps: MapStateToProps<User, {}, ApplicationState> = (state) => ({
  ...state.user,
});

export default connect(mapStateToProps)(withRouter(AuthorizationRoute));
