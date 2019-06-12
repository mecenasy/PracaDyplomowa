import React, { FC } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from '../../store/constants';
import { User } from '../../store/User/constants';
import { Redirect } from 'react-router-dom';

const RedirectFromLogin: FC<Pick<User, 'role'>> = (props) => {
  const { role, ...restProps } = props;
  console.log("TCL: role", role)
  return (
    <>
      <Redirect from={'/'} to={'/login'} {...restProps} />
      {
        props.role &&
        <Redirect from={'/login'} to={'/' + role} {...restProps} />
      }
    </>
  );
};

const mapStateToProps: MapStateToProps<Pick<User, 'role'>, {}, ApplicationState> = (state) => ({
  role: state.user.role,
});

export default connect(mapStateToProps)(RedirectFromLogin);
