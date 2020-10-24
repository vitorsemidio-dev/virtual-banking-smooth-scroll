/** @format */

import React from 'react';

import LinkScrollButton from '../LinkScrollButton';

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

const InfoSection: React.FC = () => {
  return (
    <InfoContainer lightBg>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>TopLine</TopLine>
              <Heading>Heading</Heading>
              <Subtitle darkText>Subtitle</Subtitle>
              <BtnWrap>
                <LinkScrollButton to='home'>Button</LinkScrollButton>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
