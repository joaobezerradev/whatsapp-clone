import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 10px;

  display: flex;

  > div {
    background-color: #fff;
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