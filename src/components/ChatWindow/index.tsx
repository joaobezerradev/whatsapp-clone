import { AttachFile, Search, MoreVert } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Chat, useChat } from '../../hooks/chat';

import {
  Container,
  Header,
  Body,
  Footer,
  HeaderInfo,
  HeaderButtons,
} from './styles';

const ChatWindow: React.FC = () => {
  const [chat, setChat] = useState<Chat>();
  const { activeChat } = useChat();

  useEffect(() => {
    if (activeChat) {
      setChat(activeChat);
    }
  }, [activeChat]);
  return (
    <Container>
      <Header>
        <HeaderInfo>
          <img src={chat?.avatar} alt={chat?.name} />
          <div>{chat?.name}</div>
        </HeaderInfo>

        <HeaderButtons>
          <div>
            <Search style={{ color: '#919191' }} />
          </div>
          <div>
            <AttachFile style={{ color: '#919191' }} />
          </div>
          <div>
            <MoreVert style={{ color: '#919191' }} />
          </div>
        </HeaderButtons>
      </Header>
      <Body>...</Body>
      <Footer>...</Footer>
    </Container>
  );
};

export default ChatWindow;
