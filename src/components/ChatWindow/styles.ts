import styled from 'styled-components';

import chatBg from '../../assets/chat-bg.png';

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

export const Body = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: #e5ddd5;
  background-size: cover;
  background-position: top;
  background-image: url(${chatBg});

  padding: 20px 30px;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export const Footer = styled.form`
  height: 62px;

  display: flex;
  align-items: center;
`;

export const FooterPre = styled.div`
  display: flex;
  margin: 0 15px;

  button {
    border: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    overflow: hidden;

    transition: all ease 0.3s;
  }
`;

export const EmojiArea = styled.div`
  height: 200px;
  overflow-y: hidden;
  transition: all ease 0.3s;

  aside.emoji-picker-react {
    width: auto;
    background: none;
  }

  .emoji-picker-react .emoji-group:before {
    background: none;
  }
`;

export const FooterInputArea = styled.div`
  flex: 1;

  input {
    width: 100%;
    height: 40px;
    border: 0;

    background-color: #fff;
    border-radius: 20px;
    font-size: 15px;
    color: #4a4a4a;
    padding-left: 15px;
  }
`;

export const FooterPos = styled.div`
  display: flex;
  margin: 0 15px;

  button {
    border: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    overflow: hidden;
  }
`;
