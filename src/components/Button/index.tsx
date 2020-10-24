/** @format */

import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer, LinkScrollButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  big?: boolean;
  dark?: boolean;
  fontBig?: boolean;
  hover?: boolean;
  to: string;
}

const Button: React.FC<ButtonProps> = ({
  primary = true,
  big,
  dark = true,
  fontBig,
  hover,
  to,
  children,
}) => {
  return (
    <LinkScrollButton
      // style={{
      //   backgroundColor: primary ? '#01BF71' : '#010606',
      //   padding: big ? '14px 48px' : '12px 30px',
      //   color: dark ? '#010606' : '#fff',
      //   fontSize: fontBig ? '20px' : '16px',
      // }}
      to={to}>
      {children}
    </LinkScrollButton>
  );
};

export default Button;
