import React from 'react';
import { IconType } from 'react-icons';

import { Container } from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  iconAlign?: 'left' | 'right';
  backgroundColor?: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  icon: Icon,
  iconAlign,
  backgroundColor,
  ...rest
}) => (
  <Container
    {...rest}
    iconAlign={iconAlign ?? 'right'}
    backgroundColor={backgroundColor}
  >
    {children}
    {Icon && <Icon size={20} />}
  </Container>
);

export default Button;
