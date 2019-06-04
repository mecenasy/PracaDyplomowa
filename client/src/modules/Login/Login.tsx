
import React, { FC } from 'react';
import Input1 from '../SimpleComponents/Input/Input';
import * as P from './parts';
import { Field, Form, } from 'react-final-form';
import { validateLoginForm, hasWrapperError } from './helpers';

interface LoginProps {
  alertMassage: string;
}

const Login: FC<LoginProps> = ({
  alertMassage,
}) => {
  const onSubmit = (e: any) => {
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

export default Login;
