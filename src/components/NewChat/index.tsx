import { ArrowBack } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

import { Container, Head, List } from './styles';

import api, { UserCollection } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useChat } from '../../hooks/chat';

interface NewChatProps {
  show: boolean;
  setShow: Function;
}

const NewChat: React.FC<NewChatProps> = ({ show, setShow }) => {
  const [contacts, setContacts] = useState<UserCollection[]>([]);
  const { user } = useAuth();
  const { setActiveChat } = useChat();

  useEffect(() => {
    const loadContacts = async (): Promise<void> => {
      const response = await api.getContactList(user.id);
      setContacts(response);
    };
    loadContacts();
  }, [user.id]);

  const addNewChat = async (contact: UserCollection): Promise<void> => {
    await api.addNewChat(contact, user);
    setShow(false);
    setActiveChat(contact);
  };
  return (
    <Container style={{ left: show ? 0 : -415 }}>
      <Head>
        <button type="button" onClick={() => setShow(false)}>
          <ArrowBack style={{ color: '#FFF' }} />
        </button>
        <span>Nova conversa</span>
      </Head>
      <List>
        {contacts.map(contact => (
          <button
            key={contact.id}
            type="button"
            onClick={() => addNewChat(contact)}
          >
            <img src={contact.avatar} alt={contact.name} />
            <span>{contact.name}</span>
          </button>
        ))}
      </List>
    </Container>
  );
};

export default NewChat;
