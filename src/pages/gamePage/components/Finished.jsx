import styled from '@emotion/styled';
import React from 'react';

const Finished = () => {
  return (
    <FinishedContainer>
      <TempTxt>0˚C</TempTxt>
    </FinishedContainer>
  );
};
const FinishedContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 21rem;
  top: 23rem;
  z-index: 5;
  color: white;
`;
const TempTxt = styled.h1`
  text-align: center;
  font-family: 'ONE Mobile Title';
  font-size: 6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 90px */
  letter-spacing: -0.06rem;
  margin: 0;
`;
export default Finished;
