import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;

  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;
export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin: 0 15px;
  }

  div {
    font-size: 17px;
    color: #000;
  }
`;
export const Body = styled.div``;
export const Footer = styled.div``;
