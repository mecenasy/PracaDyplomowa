import styled from 'styled-components';

export const OuterWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px;
  height: 180px;
  width: 100%;
  border: 1px solid grey;
  border-radius: 6px;
  box-shadow: 0 0 6px 0 gray;
      background: #c9ddf330;
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

export const DataRow = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const TitleRow = styled.div`
  width: 120px;
  font-weight: 700;
  font-size: 16px;
`;

export const TitleData = styled.div`
  font-weight: 500;
  font-size: 16px;
`;
