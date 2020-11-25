import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;

  font-size: 1.8rem;

  svg {
    margin: 0.4rem;
    animation: 1.5s ${spin} infinite linear;
  }
`;
