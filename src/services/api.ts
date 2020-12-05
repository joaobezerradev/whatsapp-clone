import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import firebase from 'firebase/app';

import { format } from 'date-fns';
import firebaseConfig from '../config/firebaseConfig';
import { Chat } from '../hooks/chat';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export interface UserCollection {
  id: string;
  name: string;
  avatar: string;
}

interface ChatList {
  setChatList: Function;
  userId: string;
}

const googleLogin = async (): Promise<firebase.auth.UserCredential> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebaseApp.auth().signInWithPopup(provider);
};
const googleLogOut = async (): Promise<void> => {
  return firebaseApp.auth().signOut();
};
const addUser = async (user: UserCollection): Promise<void> => {
  await db.collection('users').doc(user.id).set(
    {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
    },
    { merge: true },
  );
};
const getContactList = async (userId: string): Promise<UserCollection[]> => {
  const contactList: UserCollection[] = [];
  const response = await db.collection('users').get();

  response.forEach(contact => {
    const data = contact.data();

    if (contact.id !== userId) {
      contactList.push({ id: data.id, avatar: data.avatar, name: data.name });
    }
  });

  return contactList;
};

const addNewChat = async (
  contact: UserCollection,
  user: UserCollection,
): Promise<void> => {
  const userChat = await db.collection('users').doc(user.id).get();

  const conversationData = userChat.data();
  if (conversationData?.chats) {
    const chatData = conversationData.chats;

    if (chatData[0]) {
      return;
    }
  }
  const chat = await db
    .collection('chats')
    .add({ users: [user.id, contact.id] });

  db.collection('users')
    .doc(contact.id)
    .update({
      chats: firebase.firestore.FieldValue.arrayUnion({
        id: chat.id,
        name: user.name,
        avatar: user.avatar,
        with: user.id,
      }),
    });

  db.collection('users')
    .doc(user.id)
    .update({
      chats: firebase.firestore.FieldValue.arrayUnion({
        id: chat.id,
        name: contact.name,
        avatar: contact.avatar,
        with: contact.id,
      }),
    });
};

const onChatList = ({ setChatList, userId }: ChatList): void => {
  db.collection('users')
    .doc(userId)
    .onSnapshot(doc => {
      if (doc.exists) {
        const data = doc.data();

        if (data?.chats) {
          setChatList(data.chats);
        }
      }
    });
};

const onChatContent = (chatId: string, setList: Function): void => {
  db.collection('chats')
    .doc(chatId)
    .onSnapshot(doc => {
      if (doc.exists) {
        const data = doc.data();

        if (data?.messages) {
          setList(data.messages);
        }
      }
    });
};
const sendMessage = async (
  chat: Chat,
  user: UserCollection,
  content: string,
): Promise<void> => {
  const date = format(new Date(), 'HH:mm');
  db.collection('chats')
    .doc(chat.id)
    .update({
      messages: firebase.firestore.FieldValue.arrayUnion({
        type: 'text',
        author: user.id,
        content,
        date,
      }),
    });

  const contacts = await db.collection('chats').doc(chat.id).get();

  const contactData = contacts.data();

  if (contactData?.users) {
    const contactUsers = [...contactData.users];

    contactUsers.map(async contactUser => {
      const contact = await db.collection('users').doc(contactUser).get();

      const data = contact.data();

      if (data?.chats) {
        const chats = [...data.chats];

        chats.forEach(item => {
          if (item.id === chat.id) {
            item.lastMessage = content;
            item.lastMessageDate = date;
          }
        });

        await db.collection('users').doc(contactUser).update({
          chats,
        });
      }
    });
  }
};
export default {
  googleLogin,
  googleLogOut,
  addUser,
  getContactList,
  addNewChat,
  onChatList,
  onChatContent,
  sendMessage,
};
