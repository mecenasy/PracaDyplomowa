import BoxWithShadowBase from '../../SimpleComponents/BoxWithShadow/BoxWithShadow';
import styled from 'styled-components';
import PhotoBase from '../../Photo/Photo';
import { Link as LinkBase } from 'react-router-dom';

export const Photo = styled(PhotoBase)`
  width: auto;
`;

export const BoxWithShadow = styled(BoxWithShadowBase)<{ isSimple: boolean, color?: string }>`
  transition: all 0.5s;
  height: 112px;
  overflow: hidden;
  ${({ color }) => color && `background-color: ${color};` }
  ${({ isSimple }) => isSimple && 'width: 80px; height: 80px;'}

  &:hover{
    border: 1px solid blue;
  }
  &:active {
    position: relative;
    top: 1px;
    left: 1px;
  }
`;

export const Link = styled(LinkBase)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: black;
  &:hover{
    text-decoration: none;
    color: black;
  }
`;

export const Title = styled.span`
  margin-left: 16px;
`;

export const Wrapper = styled.div`
  position: relative;
`;
