import React from 'react';
import bgSrc from '../../assets/bgImg.png';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  background: linear-gradient(180deg, #6c9eff 0%, #ddd 100%);
  width: 375px;
  height: 667px;
`;

const BGImage = styled.div`
  background-image: url(${bgSrc});
  width: 375px;
  height: 667px;
`;

const Background = ({ children }) => {
  return (
    <Wrapper>
      <BGImage>{children}</BGImage>
    </Wrapper>
  );
};

export default Background;
