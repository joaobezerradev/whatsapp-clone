import React from 'react';
import { ChatProvider } from './chat';
import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ChatProvider>{children}</ChatProvider>
  </AuthProvider>
);

export default AppProvider;
