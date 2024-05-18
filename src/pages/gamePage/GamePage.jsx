import React, { useEffect, useState } from 'react';
import IceGame from './components/IceGame';
import styled from '@emotion/styled';
import bgImg from '../../assets/gamePage/bgImg.png';
import Thermo from './components/Thermo';
import Modal from '../../components/common/Modal';
import ModalCheckBtn from '../../components/common/ModalCheckBtn';
import Finished from './components/Finished';
import GameTitle from './components/GameTitle';

const GamePage = () => {
  const [showTMIModal, setShowTMIModal] = useState(false);
  const [pplNum, setPplNum] = useState(8);
  const [titleTxt, setTitleTxt] = useState(
    '얼음조각을 눌러\n우리 사이의 온도를 올려주세요!'
  );
  const maxpplNum = 8;
  const [showFinishModal, setShowFinishModal] = useState(false);

  const handleTMIModal = () => {
    setShowTMIModal(!showTMIModal);
  };

  const decreasePPlnum = () => {
    setPplNum((prev) => prev - 1);
  };

  useEffect(() => {
    if (pplNum === 0) {
      setTimeout(() => {
        setTitleTxt('우리 사이 얼음이\n모두 녹았습니다.');
        setShowFinishModal(true);
      }, 3000);
    }
  }, [pplNum]);

  return (
    <>
      {showTMIModal && (
        <Modal>
          <ModalCheckBtn onClick={handleTMIModal} />
        </Modal>
      )}
      {pplNum === 0 && <Finished />}
      {!showTMIModal && showFinishModal && <Modal />}
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
