/** @format */

import React from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps {
  primary?: boolean;
  big?: boolean;
  dark?: boolean;
  fontBig?: boolean;
  to: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Button: React.FC<ButtonProps> = ({
  primary,
  big,
  dark,
  fontBig,
  to,
  children,
}) => {
  return (
    <ButtonContainer
      style={{
        backgroundColor: primary ? '#01BF71' : '#010606',
        padding: big ? '14px 48px' : '12px 30px',
        color: dark ? '#010606' : '#fff',
        fontSize: fontBig ? '20px' : '16px',
      }}
      to={to}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
