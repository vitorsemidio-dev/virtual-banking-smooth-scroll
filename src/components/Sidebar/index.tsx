/** @format */

import React from 'react';

import { CloseIcon, SidebarContainer, Icon } from './styles';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer isOpen>
      <Icon>
        <CloseIcon></CloseIcon>
      </Icon>
    </SidebarContainer>
  );
};

export default Sidebar;
