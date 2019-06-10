import React, { FC, ComponentClass } from 'react';
import { User } from '../../store/User/constants';
import { MapStateToProps, connect } from 'react-redux';
import { ApplicationState } from '../../store/constants';
import { Redirect } from 'react-router';

export const redirectToLogin = (Component: FC<any> | ComponentClass<any, any> | null, to: string, revers: boolean = false) => {
  const RedirectComponent: FC<any> = (props) => {
    if (props.userId && Component) {
      return (
        <Component {...props} />
      );
    }
    return (
      <Redirect to={to} />
    );
  };
  const RedirectComponentReverse: FC<any> = (props) => {
    if (!props.userId && Component) {
      return (
        <Component {...props} />
      );
    }
    return (
      <Redirect to={to} />
    );
  };

  const mapStateToProps: MapStateToProps<User, any, ApplicationState> = (state) => ({
    ...state.user,
  });
  return connect(mapStateToProps)(revers ? RedirectComponentReverse : RedirectComponent);
};

export default redirectToLogin;
