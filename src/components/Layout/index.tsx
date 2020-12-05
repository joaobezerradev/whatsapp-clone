import React from 'react';
import { useAuth } from '../../hooks/auth';

import ContentArea from '../ContentArea';
import Login from '../Login';
import Sidebar from '../Sidebar';

import { Container } from './styles';

const Layout: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <Container>
      <Sidebar />

      <ContentArea />
    </Container>
  );
};

export default Layout;
