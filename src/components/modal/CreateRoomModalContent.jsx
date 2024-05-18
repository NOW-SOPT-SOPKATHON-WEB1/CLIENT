import React, { useState } from 'react';
import Modal from '../common/Modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from '@emotion/styled';
import ModalCheckBtn from '../common/ModalCheckBtn';

const CreateRoomModalContent = () => {
  const [value, setValue] = useState('000000');
  const [isOpenModal, setOpenModal] = useState(true);

  const onClickToggleModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {isOpenModal && (
        <Modal>
          <TitleWrapper>
            <h5>방이 생성되었습니다</h5>
            <CloseBtn onClick={onClickToggleModal}>X</CloseBtn>
          </TitleWrapper>

          <LabelWrapper>
            <p>초대 코드</p>
            <CopyToClipboard
              text={value}
              onCopy={() => alert('방 코드가 복사되었습니다.')}
            >
              <CopyBtn>복사하기</CopyBtn>
            </CopyToClipboard>
          </LabelWrapper>
          <NumberDisplay>
            {value.split('').map((digit, index) => (
              <NumberWrapper key={index}>{digit}</NumberWrapper>
            ))}
          </NumberDisplay>
          <ModalCheckBtn type='button' onClick={onClickToggleModal}>
            확인
          </ModalCheckBtn>
        </Modal>
      )}
    </>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
`;
const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
  justify-content: space-between;
`;

const NumberDisplay = styled.div`
  display: flex;
  margin: 1rem 0 2rem 0;
`;
const NumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 1rem;
  width: 2.7rem;
  height: 2.9rem;
  margin: 0.2rem;
  background-color: lightgray;
`;
const CloseBtn = styled.button`
  width: 1.3rem;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`;
const CopyBtn = styled.button`
  border: none;
`;

export default CreateRoomModalContent;
