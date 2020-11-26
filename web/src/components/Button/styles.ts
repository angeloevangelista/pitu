import { darken } from 'polished';
import styled from 'styled-components';

interface IContainerProps {
  backgroundColor?: string;
  iconAlign?: 'left' | 'right';
}

export const Container = styled.button<IContainerProps>`
  height: 4rem;
  padding: 0 1rem;

  color: #fff;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.iconAlign === 'left' ? 'row-reverse' : 'row')};

  border: 0;
  border-radius: 0.4rem;
  background: ${(props) => (props.backgroundColor ? props.backgroundColor : '#2793e6')};

  transition: background-color 0.25s;

  &:hover {
    background: ${(props) => (props.backgroundColor
    ? darken(0.1, props.backgroundColor)
    : darken(0.1, '#2793e6'))};
  }

  svg {
    margin: 0 0.4rem;
  }
`;
