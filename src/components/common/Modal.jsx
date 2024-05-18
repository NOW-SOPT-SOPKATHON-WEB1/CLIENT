import styled from '@emotion/styled';
import React from 'react';

function Modal({ children }) {
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
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 30px rgb(30 30 30 / 18.5%);
  border: 1px solid rgba(101, 163, 255, 0.5);
  border-radius: 20px;
`;

const Backdrop = styled.div`
  position: fixed;
  margin: 0 auto;

  z-index: 9999;

  width: 375px;
  height: 100vh;
  background-color: rgba(30, 36, 67, 0.53);
`;

export default Modal;
