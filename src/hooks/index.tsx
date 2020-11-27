import React from 'react';
import { ChatProvider } from './chat';

const AppProvider: React.FC = ({ children }) => (
  <ChatProvider>{children}</ChatProvider>
);

export default AppProvider;
