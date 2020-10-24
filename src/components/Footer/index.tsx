/** @format */

import React from 'react';

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='#'>How it works</FooterLink>
              <FooterLink to='#'>Testimonials</FooterLink>
              <FooterLink to='#'>Careers</FooterLink>
              <FooterLink to='#'>Investors</FooterLink>
              <FooterLink to='#'>Terms of Service</FooterLink>
            </FooterLinkItem>

            <FooterLinkItem>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='#'>Submit Video</FooterLink>
              <FooterLink to='#'>Ambassadors</FooterLink>
              <FooterLink to='#'>Agency</FooterLink>
              <FooterLink to='#'>Influencer</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='#'>Contact</FooterLink>
              <FooterLink to='#'>Suport</FooterLink>
              <FooterLink to='#'>Destinations</FooterLink>
              <FooterLink to='#'>Sponsorships</FooterLink>
            </FooterLinkItem>

            <FooterLinkItem>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='#'>Instagram</FooterLink>
              <FooterLink to='#'>Facebook</FooterLink>
              <FooterLink to='#'>Youtube</FooterLink>
              <FooterLink to='#'>Twitter</FooterLink>
              <FooterLink to='#'>LinkedIn</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>logo</SocialLogo>
            <WebsiteRights>
              logo © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                {/* <FaFacebook /> */}
                FaFacebook
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                {/* <FaInstagram /> */}
                FaInstagram
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                {/* <FaTwitter /> */}
                FaTwitter
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                {/* <FaYoutube /> */}
                FaYoutube
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                {/* <FaLinkedin /> */}
                FaLinkedin
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
