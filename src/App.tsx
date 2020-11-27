import React from 'react';

import Layout from './components/Layout';
import AppProvider from './hooks';
import GlobalStyle from './styles/GlobalStyles';

const App: React.FC = () => (
  <AppProvider>
    <Layout />
    <GlobalStyle />
  </AppProvider>
);

export default App;
