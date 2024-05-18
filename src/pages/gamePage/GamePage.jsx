import React, { useState } from 'react';
import IceGame from './components/IceGame';
import styled from '@emotion/styled';
import bgImg from '../../assets/gamePage/bgImg.png';
import Thermo from './components/Thermo';
import Modal from '../../components/common/Modal';
import ModalCheckBtn from '../../components/common/ModalCheckBtn';

const GamePage = () => {
  const [showTMIModal, setShowTMIModal] = useState(false);
  const [pplNum, setPplNum] = useState(8);
  const maxpplNum = 8;

  const handleTMIModal = () => {
    setShowTMIModal(!showTMIModal);
  };

  const decreasePPlnum = () => {
    setPplNum((prev) => prev - 1);
  };
  return (
    <>
      {showTMIModal ? (
        <Modal>
          <ModalCheckBtn onClick={handleTMIModal} />
        </Modal>
      ) : null}

      <GamePageBox>
        <GamePageH1>
          얼음조각을 눌러{'\n'}우리 사이의 온도를 올려주세요!
        </GamePageH1>
        <IceGame
          handleTMIModal={handleTMIModal}
          decreasePPlnum={decreasePPlnum}
        />
        <ThermoPart>
          <Thermo pplNum={pplNum} maxpplNum={maxpplNum} />
          <ThermoTxtWrapper>
            <ThermoTxtTitle>우리 사이</ThermoTxtTitle>
            <ThermoTxt>-{pplNum}˚C</ThermoTxt>
          </ThermoTxtWrapper>
        </ThermoPart>
        <BGGrad />
        <BGImage src={bgImg} alt='background' />
      </GamePageBox>
    </>
  );
};
const BGGrad = styled.div`
  position: absolute;
  top: 0;
  width: 375px;
  height: 667px;
  background: linear-gradient(
    180deg,
    #fff 13.42%,
    #fff 38.09%,
    rgba(255, 255, 255, 0) 65.07%
  );
`;
const ThermoPart = styled.div`
  position: absolute;
  left: 1.6rem;
  bottom: 3rem;
  display: flex;
  align-items: flex-end;
  gap: 1.3rem;
  z-index: 3;
`;
const GamePageBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 667px;
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
  color: #256cf8;
  margin: 3.5rem 0;

  top: 3rem;
  /* Text/Head02: Bold */
  font-family: Pretendard;
  font-size: 2.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.026rem;
  z-index: 2;
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

  font-family: Pretendard;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.02rem;
  margin: 0;
  z-index: 3;
`;
const ThermoTxtTitle = styled(ThermoTxt)`
  font-size: 1.6rem;
`;
export default GamePage;
