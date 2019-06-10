
import React, { FC } from 'react';
import Input1 from '../SimpleComponents/Input/Input';
import * as P from './parts';
import { Field, Form } from 'react-final-form';
import { validateLoginForm, hasWrapperError } from './helpers';
import { MapDispatchToProps, MapStateToProps, connect } from 'react-redux';
import { ApplicationState } from '../../store/constants';
import { loginUserRequest } from '../../store/User/actions';
import { LoginProps, LoginAction } from './types';

const Login: FC<LoginProps & LoginAction > = ({
  alertMassage,
  onLogin,
}) => {
  const onSubmit = (e: any) => {
    onLogin(e.user, e.password);
    console.log(e);
  };

  return (
    <P.BoxWithShadow>
      <P.Title>Witaj w systemie uczelnianym</P.Title>
      <P.SubTitle>Aby wejśc do systemy należy podać login i hasło</P.SubTitle>
      <Form
        validate={validateLoginForm}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <P.Form onSubmit={handleSubmit}>
            <P.WrapperAlert>
              {alertMassage &&
                <P.LoginAlert variant={'danger'}>This is a alert—check it out!</P.LoginAlert>
              }
            </P.WrapperAlert>
            <Field name={'user'} >
              {({ input, meta }) => (
                <>
                  <Input1 {...input} type={'text'} placeholder={'Login'} />
                  <P.ValidationAlert>
                    {hasWrapperError(meta) &&
                      <P.Error>{meta.error}</P.Error>
                    }
                  </P.ValidationAlert>
                </>
              )}
            </Field>
            <Field name={'password'} >
              {({ input, meta }) => (
                <>
                  <Input1 {...input} type={'password'} placeholder={'Hasło'} />
                  <P.ValidationAlert>
                    {hasWrapperError(meta) &&
                      <P.Error>{meta.error}</P.Error>
                    }
                  </P.ValidationAlert>
                </>
              )}
            </Field>
            <P.SubmitButton variant={'outline-primary'} type={'submit'}>Zaloguj</P.SubmitButton>
          </P.Form>
        )}
      </Form>
    </P.BoxWithShadow>
  );
};

const mapStateToProps: MapStateToProps<LoginProps, {}, ApplicationState> = (store) => ({
  alertMassage: '',
});

const mapDispatchToProps: MapDispatchToProps<LoginAction, {}> = (dispatch) => ({
  onLogin: (user: string, password: string) => {
    dispatch(loginUserRequest(user, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
