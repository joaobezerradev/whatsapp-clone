import React from 'react';

import ContentArea from '../ContentArea';
import Sidebar from '../Sidebar';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Sidebar />

      <ContentArea />
    </Container>
  );
};

export default Layout;
