import styled from '@emotion/styled';
import React from 'react';

const GameTitle = ({ text }) => {
  return <GamePageH1>{text}</GamePageH1>;
};
const GamePageH1 = styled.h1`
  color: #256cf8;
  margin: 3.5rem 2rem;
  top: 3rem;
  /* Text/Head02: Bold */
  font-family: 'ONE Mobile';
  font-size: 2.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.026rem;
  z-index: 2;
  white-space: pre-wrap;
`;
export default GameTitle;
