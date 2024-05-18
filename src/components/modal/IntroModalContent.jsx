import React, { useState } from 'react';
import styled from '@emotion/styled';
import ModalCheckBtn from '../common/ModalCheckBtn';
import WhiteModal from '../common/WhiteModal';

const IntroModalContent = () => {
  const [isOpenModal, setOpenModal] = useState(true);

  const onClickToggleModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      {isOpenModal && (
        <WhiteModal>
          <TitleWrapper>
            <p>
              멜팅은 한 명의 휴대폰으로 진행됩니다. <br />
              확인 버튼을 누르신 후, 다른 분들은 휴대폰을 내려놔 주세요!
            </p>
          </TitleWrapper>

          <ModalCheckBtn
            type='button'
            onClick={onClickToggleModal}
            value='확인'
          ></ModalCheckBtn>
        </WhiteModal>
      )}
    </>
  );
};

export default IntroModalContent;

const TitleWrapper = styled.div`
  display: flex;
  width: 28rem;
  height: 7.2rem;
  position: relative;
  bottom: 1rem;

  p {
    font-size: 1.6rem;
    color: #525252;
  }
`;
