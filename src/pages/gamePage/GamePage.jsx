import React, { useEffect, useState } from 'react';
import IceGame from './components/IceGame';
import styled from '@emotion/styled';
import bgImg from '../../assets/gamePage/bgImg.png';
import Thermo from './components/Thermo';
import Finished from './components/Finished';
import GameTitle from './components/GameTitle';
import TmiOpenModalContent from '../../components/modal/TmiOpenModalContent';
import AfterFinishModal from './components/AfterFinishModal';
import zeroImg from '../../assets/gamePage/zero.png';
const GamePage = () => {
  const [showTMIModal, setShowTMIModal] = useState(false);
  const [pplNum, setPplNum] = useState(8);
  const [titleTxt, setTitleTxt] = useState(1);
  const maxpplNum = 8;
  const [showFinishModal, setShowFinishModal] = useState(false);

  const handleTMIModal = () => {
    setTimeout(() => {
      setShowTMIModal(!showTMIModal);
    }, 800);
  };

  const decreasePPlnum = () => {
    setPplNum((prev) => prev - 1);
  };

  useEffect(() => {
    if (pplNum === 0) {
      setTitleTxt(0);
      setTimeout(() => {
        setShowFinishModal(true);
      }, 8000);
    }
  }, [pplNum]);

  return (
    <Container>
      {showTMIModal && (
        <TmiOpenModalContent onClick={handleTMIModal} userId={7 - pplNum} />
      )}
      {pplNum === 0 && <Finished />}
      {!showTMIModal && showFinishModal && <AfterFinishModal />}
      <GamePageBox>
        <GameTitle text={titleTxt} />
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
    </Container>
  );
};
const Container = styled.div`
  position: relative;
`;
const BGGrad = styled.div`
  position: absolute;
  top: 0;
  width: 375px;
  height: 667px;
  background: linear-gradient(
    180deg,
    #fff 13.42%,
    #fff 32.09%,
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
  background-color: #256cf8;
`;
const BGImage = styled.img`
  position: absolute;
  width: 375px;
  height: fit-content;
  z-index: 1;
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
