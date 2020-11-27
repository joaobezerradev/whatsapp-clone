import React, { useEffect } from 'react';
import { useChat } from '../../hooks/chat';
import ChatIntro from '../ChatIntro';
import ChatWindow from '../ChatWindow';

import { Container } from './styles';

const ContentArea: React.FC = () => {
  const { getActiveChat, setActiveChat } = useChat();
  const chat = getActiveChat();

  return <Container>{chat ? <ChatWindow /> : <ChatIntro />}</Container>;
};

export default ContentArea;
