import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  padding: 0 1rem;
`;

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 40fr 1fr;

  flex: 0 0 80%;
  padding: 1rem;

  border: solid 1px #ccc;
  border-radius: 0.4rem;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  margin: 2rem;
  padding: 2rem;

  color: #a21010;
  font-size: 1.8rem;

  background: ${lighten(0.6, '#a21010')};
  border: solid 1px ${lighten(0.4, '#a21010')};
  border-radius: 0.4rem;

  svg {
    margin-right: 0.4rem;
  }
`;

export const ResultContainer = styled.div`
  width: 100%;
  margin-top: 4rem;

  flex: 0 0 80%;
  max-width: 80%;
  padding: 1rem;

  border-radius: 0.4rem;
  text-align: center;

  > div {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 8fr 2fr;
  }

  p {
    margin-top: 2rem;
  }
`;
