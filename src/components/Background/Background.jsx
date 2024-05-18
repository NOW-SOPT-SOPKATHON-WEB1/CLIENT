import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  box-sizing: border-box;
  background: linear-gradient(180deg, #6c9eff 0%, #ddd 100%);
  width: 375px;
  height: 667px;
`;

const BGImage = styled.div`
  background-image: url(${(props) => props.src});
  width: 375px;
  height: 667px;
`;

const Background = ({ children, src }) => {
  return (
    <Wrapper>
      <BGImage src={src}>{children}</BGImage>
    </Wrapper>
  );
};

export default Background;
