import React, { useEffect, useState } from 'react';
import { Chat, useChat } from '../../hooks/chat';

import { Container } from './styles';

const ChatWindow: React.FC = () => {
  const [chat, setChat] = useState<Chat>();
  const { getActiveChat } = useChat();

  useEffect(() => {
    const activeChat = getActiveChat();
    if (activeChat) {
      setChat(activeChat);
    }
  }, [getActiveChat]);
  return (
    <Container>
      <div>{chat?.id}</div>
    </Container>
  );
};

export default ChatWindow;
