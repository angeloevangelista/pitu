import React from 'react';

import logoImg from '../../assets/logo.png';
import { Container, Content, Logo } from './styles';

const Header: React.FC = ({ children }) => (
  <Container>
    <Content>
      <Logo src={logoImg} alt="Pitu - Encurtador de URL" />

      <h1>Pitu</h1>
      <p>{children}</p>
    </Content>
  </Container>
);

export default Header;
