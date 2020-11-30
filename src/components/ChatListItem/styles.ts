import styled, { css } from 'styled-components';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 70px;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 15px;
  }

  ${props =>
    props.active &&
    css`
      background-color: #ebebeb;
    `}

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Lines = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #eee;
  padding-right: 15px;
  margin-left: 15px;

  flex-wrap: wrap;
  min-width: 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const Name = styled.div`
  font-size: 17px;
  color: #000;
`;

export const Date = styled.div`
  font-size: 12px;
  color: #999;
`;

export const LastMessage = styled.div`
  font-size: 14px;
  color: #999;
  display: flex;
  width: 100%;

  > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
