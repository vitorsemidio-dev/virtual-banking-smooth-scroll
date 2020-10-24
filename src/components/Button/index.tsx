/** @format */

import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  big?: boolean;
  dark?: boolean;
  fontBig?: boolean;
  hover?: boolean;
  to: string;
}

const Button: React.FC<ButtonProps> = ({
  primary,
  big,
  dark,
  fontBig,
  hover,
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