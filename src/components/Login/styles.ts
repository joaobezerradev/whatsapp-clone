import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #cdcdcd;
    border-radius: 4px;

    img {
      padding: 10px;
      height: 50px;
      width: 50px;
      border-radius: 4px;

      margin-right: 5px;
      background-color: #ffffff;
    }

    span {
      color: #7a7a7a;
      font-size: 18px;
      font-weight: bold;
      font-style: 'Suegoe UI';
      padding-right: 10px;
    }

    &:hover {
      background-color: #4285f4;
      span {
        color: #ffffff;
      }
    }
  }
`;
