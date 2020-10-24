/** @format */

import React, { useState } from 'react';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroCTA,
  ArrowForward,
  ArrowRight,
} from './styles';

import video from '../../videos/video.mp4';

const HeroSection: React.FC = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </HeroP>

        <HeroBtnWrapper>
          <HeroCTA
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            to='signup'
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroCTA>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
