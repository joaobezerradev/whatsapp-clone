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
import NewChat from '../NewChat';

const Sidebar: React.FC = () => {
  const [show, setShow] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([
    {
      id: 1,
      name: 'Marcelo Estevam',
      avatar:
        'https://instagram.fjpa1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/105966611_3070014389750111_7135244264715933822_n.jpg?_nc_ht=instagram.fjpa1-1.fna.fbcdn.net&_nc_ohc=bPHwTCmOXrQAX_0QFvh&tp=1&oh=ce47939f1a269a32cd0d6a25abffc89b&oe=5FEFD59A',
    },
  ]);
  const { setActiveChat, activeChat } = useChat();

  return (
    <Container>
      <NewChat show={show} setShow={setShow} />
      <Header>
        <img
          alt="profile"
          src="https://avatars3.githubusercontent.com/u/48421122?s=460&u=35c476efc7f477bf0adcf23bb9f8d4a7e73148e4&v=4"
        />
        <HeaderButtons>
          <button type="button">
            <DonutLarge style={{ color: '#919191' }} />
          </button>
          <button type="button" onClick={() => setShow(true)}>
            <ChatIcon style={{ color: '#919191' }} />
          </button>
          <button type="button">
            <MoreVert style={{ color: '#919191' }} />
          </button>
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
