import styled from '@emotion/styled';
import React from 'react';

function WhiteModal({ children }) {
  return (
    <ModalContainer>
      <DialogBox>{children}</DialogBox>
      <Backdrop />
    </ModalContainer>
  );
}

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
  width: 33.4rem;
  height: 24.5rem;
  background-color: rgb(255, 255, 255);
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

export default WhiteModal;
