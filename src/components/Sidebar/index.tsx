import React, { useState } from 'react';

import {
  Chat as ChatIcon,
  DonutLarge,
  MoreVert,
  Search,
} from '@material-ui/icons';

import {
  Container,
  Header,
  HeaderButtons,
  SearchInput,
  ChatList,
} from './styles';
import ChatListItem from '../ChatListItem';
import { Chat, useChat } from '../../hooks/chat';

const Sidebar: React.FC = () => {
  const [chatList, setChatList] = useState<Chat[]>([
    {
      id: 1,
      title: 'Meu BB',
      image:
        'https://avatars3.githubusercontent.com/u/48421122?s=460&u=35c476efc7f477bf0adcf23bb9f8d4a7e73148e4&v=4',
    },
    {
      id: 2,
      title: 'Meu BB',
      image:
        'https://avatars3.githubusercontent.com/u/48421122?s=460&u=35c476efc7f477bf0adcf23bb9f8d4a7e73148e4&v=4',
    },
    {
      id: 3,
      title: 'Meu BB',
      image:
        'https://avatars3.githubusercontent.com/u/48421122?s=460&u=35c476efc7f477bf0adcf23bb9f8d4a7e73148e4&v=4',
    },
    {
      id: 4,
      title: 'Meu BB',
      image:
        'https://avatars3.githubusercontent.com/u/48421122?s=460&u=35c476efc7f477bf0adcf23bb9f8d4a7e73148e4&v=4',
    },
  ]);
  const { setActiveChat } = useChat();
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
            <ChatIcon style={{ color: '#919191' }} />
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
          <ChatListItem
            key={String(key)}
            onClick={() => setActiveChat(chatList[key])}
          />
        ))}
      </ChatList>
    </Container>
  );
};

export default Sidebar;
