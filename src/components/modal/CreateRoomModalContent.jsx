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
  gap: 100px;
`;
const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  justify-content: space-between;
`;

const NumberDisplay = styled.div`
  display: flex;
  margin: 10px 0 20px 0;
`;
const NumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  width: 27px;
  height: 29px;
  margin: 2px;
  background-color: lightgray;
`;
const CloseBtn = styled.button`
  width: 13px;
  height: 22px;
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
