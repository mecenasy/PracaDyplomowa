import styled from 'styled-components';
import BoxWithShadowBase from './SimpleComponents/BoxWithShadow/BoxWithShadow';

export const BoxWithShadow = styled(BoxWithShadowBase)`
  height: 180px;
`;

export const Wrapper = styled.div`
  box-shadow: 0 0 6px 0 gray;
  position: relative;
  width: 120px;
  height: 100%;
  border: 1px solid gray;
  border-radius: 6px;
  background: white;
  padding: 6px;
`;

export const Zdiecie = styled.div`
  width: 100%;
  height: 100%;
  background: green;
`;

export const Content = styled.div`
  margin-left: 16px;
`;
