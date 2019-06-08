import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px;
  width: 100%;
  border: 1px solid grey;
  border-radius: 6px;
  box-shadow: 0 0 6px 0 gray;
  background: #c9ddf330;
  margin-bottom: 12px;

  &:last-child{
    margin-bottom: 0;
  }
`;
