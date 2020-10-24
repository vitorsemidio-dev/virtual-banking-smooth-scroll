/** @format */

import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll, scrollSpy } from 'react-scroll';

import logo from '../../images/undraw_wallet_aym5.svg';

import {
  Nav,
  NavContainer,
  NavLogo,
  NavLogoIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './styles';

interface NavbarProps {
  toggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    scrollSpy.update();
  }, []);

  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavContainer>
            <NavLogo to='/' onClick={toggleHome}>
              <NavLogoIcon src={logo} />
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='discover'>Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='services'>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='signup'>Sign Up</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
