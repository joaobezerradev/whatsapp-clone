import React from 'react';

import { Chat, DonutLarge, MoreVert } from '@material-ui/icons';

import { Container, Header, HeaderButtons, Search, ChatList } from './styles';

const Sidebar: React.FC = () => {
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
      <Search>search</Search>
      <ChatList>chatList</ChatList>
    </Container>
  );
};

export default Sidebar;
