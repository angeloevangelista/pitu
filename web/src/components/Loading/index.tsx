import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import { Container } from './styles';

interface ILoadingProps {
  message?: string;
}

const Loading: React.FC<ILoadingProps> = ({ message = 'Carregando...' }) => (
  <Container>
    <AiOutlineLoading size={24} />
    <span>{message}</span>
  </Container>
);

export default Loading;
