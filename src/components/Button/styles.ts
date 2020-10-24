/** @format */

import styled from 'styled-components';
import { Link } from 'react-scroll';

export const ButtonContainer = styled(Link)`
  border-radius: 50px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;
