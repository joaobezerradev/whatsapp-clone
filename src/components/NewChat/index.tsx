import { ArrowBack } from '@material-ui/icons';
import React, { useState } from 'react';

import { Container, Head, List } from './styles';

interface NewChatProps {
  show: boolean;
  setShow: Function;
}

const NewChat: React.FC<NewChatProps> = ({ show, setShow }) => {
  const [contacts, setContacts] = useState([
    {
      id: 123,
      avatar:
        'https://thumbs.dreamstime.com/b/opte-pelo-avatar-placeholder-da-foto-%C3%ADcone-do-perfil-124557887.jpg',
      name: 'Joao Vitor',
    },
    {
      id: 123,
      avatar:
        'https://thumbs.dreamstime.com/b/opte-pelo-avatar-placeholder-da-foto-%C3%ADcone-do-perfil-124557887.jpg',
      name: 'Joao Vitor',
    },
    {
      id: 123,
      avatar:
        'https://thumbs.dreamstime.com/b/opte-pelo-avatar-placeholder-da-foto-%C3%ADcone-do-perfil-124557887.jpg',
      name: 'Joao Vitor',
    },
  ]);

  return (
    <Container style={{ left: show ? 0 : -415 }}>
      <Head>
        <button type="button" onClick={() => setShow(false)}>
          <ArrowBack style={{ color: '#FFF' }} />
        </button>
        <span>Nova conversa</span>
      </Head>
      <List>
        {contacts.map((contact, key) => (
          <div key={key}>
            <img src={contact.avatar} alt={contact.name} />
            <span>{contact.name}</span>
          </div>
        ))}
      </List>
    </Container>
  );
};

export default NewChat;
