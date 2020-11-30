import React, { useState } from 'react';

import {
  Chat as ChatIcon,
  DonutLarge,
  MoreVert,
  Search,
} from '@material-ui/icons';

import ChatListItem from '../ChatListItem';
import { Chat, useChat } from '../../hooks/chat';

import {
  Container,
  Header,
  HeaderButtons,
  SearchInput,
  ChatList,
} from './styles';

const Sidebar: React.FC = () => {
  const [chatList, setChatList] = useState<Chat[]>([
    {
      id: 1,
      name: 'Meu BB',
      avatar:
        'https://instagram.fjpa8-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120133369_321880132251910_4613029532289345176_n.jpg?_nc_ht=instagram.fjpa8-1.fna.fbcdn.net&_nc_ohc=DiN2xnORwXgAX_y59R2&tp=1&oh=254b09951ce69da9b9d6e2e9fcf8b108&oe=5FE8CEAE',
    },
  ]);
  const { setActiveChat, activeChat } = useChat();

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
            data={item}
            active={activeChat?.id === chatList[key].id}
            onClick={() => setActiveChat(chatList[key])}
          />
        ))}
      </ChatList>
    </Container>
  );
};

export default Sidebar;
