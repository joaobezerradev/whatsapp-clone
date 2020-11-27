import React from 'react';

import { Container, Lines, Name, Date, LastMessage } from './styles';

interface ChatListItemProps {
  onClick: VoidFunction;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <img
        src="https://instagram.fjpa8-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120133369_321880132251910_4613029532289345176_n.jpg?_nc_ht=instagram.fjpa8-1.fna.fbcdn.net&_nc_ohc=DiN2xnORwXgAX_y59R2&tp=1&oh=254b09951ce69da9b9d6e2e9fcf8b108&oe=5FE8CEAE"
        alt="foto"
      />
      <Lines>
        <div>
          <Name>Meu BB</Name>
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
