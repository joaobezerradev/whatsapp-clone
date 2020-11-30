import React from 'react';
import { useChat } from '../../hooks/chat';
import ChatIntro from '../ChatIntro';
import ChatWindow from '../ChatWindow';

import { Container } from './styles';

const ContentArea: React.FC = () => {
  const { activeChat } = useChat();

  return <Container>{activeChat ? <ChatWindow /> : <ChatIntro />}</Container>;
};

export default ContentArea;
