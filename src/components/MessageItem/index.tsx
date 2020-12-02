import React from 'react';
import { Container, MessageText, MessageDate } from './styles';

interface MessageProps {
  data: {
    message: string;
    author: string;
  };
}

const MessageItem: React.FC<MessageProps> = ({ data }) => {
  return (
    <Container>
      <div>
        <MessageText>{data.message}</MessageText>
        <MessageDate>19:00</MessageDate>
      </div>
    </Container>
  );
};

export default MessageItem;
