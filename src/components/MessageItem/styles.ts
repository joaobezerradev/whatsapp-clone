import styled, { css } from 'styled-components';

interface ContainerProps {
  author: boolean;
}
export const Container = styled.div<ContainerProps>`
  margin-bottom: 10px;

  display: flex;

  ${props =>
    props.author &&
    css`
      justify-content: flex-end;
    `}

  > div {
    ${props =>
      props.author
        ? css`
            background-color: #dcf8c6;
          `
        : css`
            background-color: #fff;
          `}

    border-radius: 10px;
    box-shadow: 0 1px 1px #ccc;
    padding: 3px;
    display: flex;
    flex-direction: column;
    max-width: 90%;
  }
`;

export const MessageText = styled.div`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
`;
export const MessageDate = styled.div`
  font-size: 11px;
  color: #999;
  margin-right: 5px;
  text-align: right;
  height: 15px;
  margin-top: -15px;
`;
