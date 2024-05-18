import React from 'react';
import finishImg from '../../../assets/gamePage/afterFinishImg.png';
import restartBtnImg from '../../../assets/gamePage/restartBtnImg.png';
import styled from '@emotion/styled';
const AfterFinishModal = () => {
  return (
    <ModalContainer>
      <DialogBox>
        <FisnishWrapper>
          <FinishTxt>여러분들의 대화도{'\n'}물처럼 흘러가길 바라요!</FinishTxt>
          <FinishImg src={finishImg} alt='finish' />
          <RestartBtn src={restartBtnImg} alt='restart' />
        </FisnishWrapper>
      </DialogBox>
      <Backdrop />
    </ModalContainer>
  );
};
const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const DialogBox = styled.div`
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 335px;
  height: fit-content;
  background-color: white;
  box-shadow: 0 0 30px rgb(30 30 30 / 18.5%);
  border: 1px solid rgba(101, 163, 255, 0.5);
  border-radius: 20px;
`;

const Backdrop = styled.div`
  position: fixed;
  margin: 0 auto;
  /* 배경 위치 수정되면 top 삭제하기 */
  top: 0;
  z-index: 9999;

  width: 375px;
  height: 667px;
  background-color: rgba(30, 36, 67, 0.53);
`;
const FisnishWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
  padding: 22px 0px;
`;
const FinishTxt = styled.h1`
  color: #525252;
  text-align: center;

  /* Text/Head04: Bold */
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: -0.2px;
  white-space: pre-wrap;
`;
const FinishImg = styled.img`
  width: 12rem;
  height: 12rem;
`;

const RestartBtn = styled.img`
  width: 14.6rem;
  height: 4.3;
`;
export default AfterFinishModal;
