import React, { useEffect, useState } from 'react';

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
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

const Sidebar: React.FC = () => {
  const { user, signOut } = useAuth();
  const [show, setShow] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const { setActiveChat, activeChat } = useChat();

  useEffect(() => {
    return api.onChatList({ userId: user.id, setChatList });
  }, [user]);

  return (
    <Container>
      <NewChat show={show} setShow={setShow} />
      <Header>
        <button type="button" onClick={signOut}>
          <img alt={user.avatar} src={user.avatar} />
        </button>

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
        {chatList.map(item => (
          <ChatListItem
            key={item.id}
            data={item}
            active={activeChat?.id === item.id}
            onClick={() => setActiveChat(item)}
          />
        ))}
      </ChatList>
    </Container>
  );
};

export default Sidebar;
