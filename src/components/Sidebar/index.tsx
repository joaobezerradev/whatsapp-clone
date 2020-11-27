import React, { useState } from 'react';

import { Chat, DonutLarge, MoreVert, Search } from '@material-ui/icons';

import {
  Container,
  Header,
  HeaderButtons,
  SearchInput,
  ChatList,
} from './styles';
import ChatListItem from '../ChatListItem';

const Sidebar: React.FC = () => {
  const [chatList, setChatList] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  return (
    <Container>
      <Header>
        <img
          alt="profile"
          src="https://avatars3.githubusercontent.com/u/48421122?s=460&u=35c476efc7f477bf0adcf23bb9f8d4a7e73148e4&v=4"
        />
        <HeaderButtons>
          <div>
            <DonutLarge style={{ color: '#919191' }} />
          </div>
          <div>
            <Chat style={{ color: '#919191' }} />
          </div>
          <div>
            <MoreVert style={{ color: '#919191' }} />
          </div>
        </HeaderButtons>
      </Header>
      <SearchInput>
        <div>
          <Search fontSize="small" style={{ color: '#919191' }} />
          <input
            type="search"
            placeholder="Procurar ou começar uma nova conversa"
          />
        </div>
      </SearchInput>
      <ChatList>
        {chatList.map((item, key) => (
          <ChatListItem key={String(key)} />
        ))}
      </ChatList>
    </Container>
  );
};

export default Sidebar;
