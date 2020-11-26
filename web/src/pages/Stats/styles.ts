import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  > a {
    height: 4rem;
    padding: 0 1rem;

    text-decoration: none;
    color: #fff;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;
    border-radius: 0.4rem;
    background: #2793e6;

    transition: background-color 0.25s;

    &:hover {
      background: ${darken(0.1, '#2793e6')};
    }

    svg {
      margin: 0 0.4rem;
    }
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem 4rem 3rem 4rem;

  color: ${lighten(0, '#a21010')};
  font-size: 1.8rem;

  svg {
    opacity: 0.5;
    margin-bottom: 1rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p,
  > strong {
    display: block;
    margin-bottom: 1rem;
  }

  > div {
    width: 100%;
    padding: 2rem;
    display: flex;
  }
`;

export const Card = styled.div`
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 0.4rem;
  text-align: center;
  margin: 0.4rem;
  border: solid 1px #ccc;

  strong {
    display: block;

    & + strong {
      margin-top: 1rem;
    }
  }
`;
