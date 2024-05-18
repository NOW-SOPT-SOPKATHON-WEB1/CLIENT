import React from 'react';
import IceGame from './components/IceGame';
import styled from '@emotion/styled';
import bgImg from '../../assets/gamePage/bgImg.png';
import Thermo from './components/Thermo';

const GamePage = () => {
  return (
    <GamePageBox>
      <GamePageH1>
        얼음조각을 눌러{'\n'}우리 사이의 온도를 올려주세요!
      </GamePageH1>
      <IceGame />
      <ThermoPart>
        <Thermo />
        <ThermoTxtWrapper>
          <ThermoTxt>우리 사이</ThermoTxt>
          <ThermoTxt>-6</ThermoTxt>
        </ThermoTxtWrapper>
      </ThermoPart>
      <BGImage src={bgImg} alt='background' />
    </GamePageBox>
  );
};
const ThermoPart = styled.div`
  position: absolute;
  left: 1.6rem;
  bottom: 3rem;
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  z-index: 3;
`;
const GamePageBox = styled.div`
  display: flex;
  position: relative;
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
  font-size: 2.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 34.5px */
  letter-spacing: -0.023rem;
  white-space: pre-wrap;
`;
const ThermoTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;
`;
const ThermoTxt = styled.p`
  color: #256cf8;
  -webkit-text-stroke-width: 4px;
  -webkit-text-stroke-color: rgba(255, 255, 255, 0.5);
  font-family: Pretendard;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.02rem;
  margin: 0;
`;
export default GamePage;
