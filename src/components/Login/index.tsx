import React from 'react';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

import googleIcon from '../../assets/google-icon.png';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  return (
    <Container>
      <button type="button" onClick={signIn}>
        <img src={googleIcon} alt="Google" />
        <span>Sign in with Google</span>
      </button>
    </Container>
  );
};

export default Login;
