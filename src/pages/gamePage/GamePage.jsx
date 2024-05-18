import React from 'react';
import IceGame from './components/IceGame';
import styled from '@emotion/styled';
import bgImg from '../../assets/gamePage/bgImg.png';

const GamePage = () => {
  return (
    <GamePageBox>
      <GamePageH1>
        얼음조각을 눌러{'\n'} 우리 사이의 온도를 올려주세요!
      </GamePageH1>
      <IceGame />
      <BGImage src={bgImg} alt='background' />
    </GamePageBox>
  );
};
const GamePageBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #6c9eff;
`;
const BGImage = styled.img`
  position: absolute;
  width: 375px;
  height: fit-content;
  z-index: 1;
`;
const GamePageH1 = styled.h1`
  color: #fff;
  margin: 3.5rem 0;

  top: 3rem;
  /* Text/Head03: Bold */
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 34.5px */
  letter-spacing: -0.23px;
  white-space: pre-wrap;
`;
export default GamePage;
