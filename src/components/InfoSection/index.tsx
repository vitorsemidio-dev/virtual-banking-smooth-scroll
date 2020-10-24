/** @format */

import React from 'react';

import LinkScrollButton from '../LinkScrollButton';
import InfoModel from './infoModel';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from './styles';

const InfoSection: React.FC<InfoModel> = ({
  id,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,

  lightBg,
  lightText,
  lightTextDesc,
  imgStart,
  dark,
  primary,
  darkText,
}) => {
  return (
    <InfoContainer id={id} lightBg={lightBg}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <LinkScrollButton
                  to='home'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  primary={primary}
                  dark={dark}>
                  {buttonLabel}
                </LinkScrollButton>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
