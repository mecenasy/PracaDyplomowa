import styled from 'styled-components';
import BoxWithShadowBase from '../BoxWithShadow/BoxWithShadow';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export const BoxWithShadow = styled(BoxWithShadowBase)`
  height: auto;
  width: 640px;
  padding: 32px;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`

`;

export const SubTitle = styled.h4`
  text-align: center;
`;

export const SubmitButton = styled(Button)`
  background-color: #b3d7ffab;
  width: 100%;
`;

export const WrapperAlert = styled.div`
  height: 50px;
  width: 100%;
  margin: 4px 0 12px;
`;

export const ValidationAlert = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2px;
`;

export const LoginAlert = styled(Alert)`
  margin: 0;
  width: 100%;
  text-align: center;
  color: black;
`;

export const Form = styled.form`
  width: calc(100% - 80px);
`;

export const Error = styled.span`
  color: red;
  text-align: center;
  font-size: 14px
`;
