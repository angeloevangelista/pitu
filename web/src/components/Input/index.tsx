import React from 'react';
import { IconType } from 'react-icons/lib';

import { Container, InputElement } from './styles';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ icon: Icon, ...rest }, ref) => (
    <Container>
      {Icon && <Icon size={24} />}
      <InputElement ref={ref} {...rest} />
    </Container>
  ),
);

export default Input;
