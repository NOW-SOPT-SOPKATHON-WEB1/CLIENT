import styled from '@emotion/styled';
import React from 'react';
import txt1 from '../../../assets/gamePage/txt1.png';
import txt2 from '../../../assets/gamePage/txt2.png';

const GameTitle = ({ text }) => {
  return <>{text ? <TxtImg src={txt1} /> : <TxtImg2 src={txt2} />}</>;
};

const TxtImg = styled.img`
  margin: 3.5rem 2rem;
  z-index: 2;
  width: 30.8rem;
  height: 7rem;
  height: fit-content;
`;
const TxtImg2 = styled.img`
  margin: 3.5rem 2rem;
  z-index: 2;
  width: fit-content;
  height: 7rem;
  height: fit-content;
`;
export default GameTitle;
