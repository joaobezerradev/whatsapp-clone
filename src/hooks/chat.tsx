import React, { createContext, useCallback, useContext, useState } from 'react';

export interface Chat {
  id: number;
  title: string;
  image: string;
}

interface ChatContextData {
  setActiveChat(data: Chat): void;
  getActiveChat(): Chat | undefined;
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData);

const ChatProvider: React.FC = ({ children }) => {
  const [chat, setChat] = useState<Chat>();

  const setActiveChat = useCallback((data: Chat) => {
    setChat(data);
  }, []);

  const getActiveChat = useCallback(() => {
    return chat;
  }, [chat]);

  return (
    <ChatContext.Provider value={{ setActiveChat, getActiveChat }}>
      {children}
    </ChatContext.Provider>
  );
};

function useChat(): ChatContextData {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error('useChat must be used whitin a Provider');
  }

  return context;
}

export { ChatProvider, useChat };

export default ChatProvider;
