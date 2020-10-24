/** @format */

import React from 'react';

import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRouter,
} from './styles';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={() => toggle()}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink
            to='discover'
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink
            to='services'
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink
            to='signup'
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={toggle}>
            Sign up
          </SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarRouter to='/signin'>Sign In</SidebarRouter>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
