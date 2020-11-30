import React from 'react';
import { Chat } from '../../hooks/chat';

import { Container, Lines, Name, Date, LastMessage } from './styles';

interface ChatListItemProps {
  onClick: VoidFunction;
  active: boolean;
  data: Chat;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  onClick,
  active,
  data,
}) => {
  return (
    <Container onClick={onClick} active={active}>
      <img src={data.avatar} alt="foto" />
      <Lines>
        <div>
          <Name>{data.name}</Name>
          <Date>20:00</Date>
        </div>
        <div>
          <LastMessage>
            <p>Te amo besta ♥</p>
          </LastMessage>
        </div>
      </Lines>
    </Container>
  );
};

export default ChatListItem;
