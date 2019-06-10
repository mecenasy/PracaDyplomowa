import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { logoutUserRequest } from '../../store/User/actions';
import { MapDispatchToProps, connect } from 'react-redux';

interface LogoutAction {
  logout: () => void;
}
const LogoutButton: FC<LogoutAction> = ({
  logout,
}) => (
    <Button onClick={logout}>
      Wyloguj
  </Button>
  );

const mapDispatchToProps: MapDispatchToProps<LogoutAction, {}> = (dispatch) => ({
  logout: () => {
    dispatch(logoutUserRequest());
  },
});

export default connect(null, mapDispatchToProps)(LogoutButton);
