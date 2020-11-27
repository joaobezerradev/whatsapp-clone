import React from 'react';

import { Container, Lines, Name, Date, LastMessage } from './styles';

const ChatListItem: React.FC = () => {
  return (
    <Container>
      <img
        src="https://avatars1.githubusercontent.com/u/54491980?s=460&u=5457192f7674845b14a107f7791033cfcbabb036&v=4"
        alt="foto"
      />
      <Lines>
        <div>
          <Name>Daniel Gomes</Name>
          <Date>20:00</Date>
        </div>
        <div>
          <LastMessage>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              rerum, voluptas ratione pariatur deserunt repellendus fugit
              quaerat mollitia hic nostrum, est autem consectetur consequatur
              adipisci alias aliquam. Minima, fuga sapiente!
            </p>
          </LastMessage>
        </div>
      </Lines>
    </Container>
  );
};

export default ChatListItem;
