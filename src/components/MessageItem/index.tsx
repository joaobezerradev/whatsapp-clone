import React from 'react';
import { useAuth } from '../../hooks/auth';
import { Container, MessageText, MessageDate } from './styles';

interface MessageProps {
  data: {
    author: string;
    content: string;
    type: string;
    date: string;
  };
}

const MessageItem: React.FC<MessageProps> = ({ data }) => {
  const { user } = useAuth();
  return (
    <Container author={user.id === data.author}>
      <div>
        <MessageText>{data.content}</MessageText>
        <MessageDate>{data.date}</MessageDate>
      </div>
    </Container>
  );
};

export default MessageItem;
