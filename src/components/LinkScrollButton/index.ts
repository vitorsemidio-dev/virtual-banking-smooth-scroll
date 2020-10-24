/** @format */

import styled from 'styled-components';
import { LinkProps } from 'react-scroll';

interface LinkScrollButtonProps extends LinkProps {
  primary?: boolean;
  big?: boolean;
  dark?: boolean;
  fontBig?: boolean;
}

const LinkScrollButton = styled.a<LinkScrollButtonProps>`
  border-radius: 50px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  background-color: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ primary }) => (primary ? '#010606' : '#01bf71')};
  }
`;

export default LinkScrollButton;
