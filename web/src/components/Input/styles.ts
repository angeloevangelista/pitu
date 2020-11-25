import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;

  border: solid 1px #ddd;
  border-radius: 0.4rem;
`;

export const InputElement = styled.input`
  width: 100%;
  padding: 0 1rem;

  border: 0;
  outline-style: none;
  background: transparent;

  &::placeholder {
    color: #aaa;
  }
`;
