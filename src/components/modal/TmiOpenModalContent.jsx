import React, { useState } from 'react';
import styled from '@emotion/styled';
import WhiteModal from '../common/WhiteModal';

const TmiOpenModalContent = ({
  title = '첫 번째 TMI',
  body = '오늘 나는 집에서 트월킹을 연습했다',
}) => {
  const [isOpenModal, setOpenModal] = useState(true);

  const handleCheckBtnClick = () => {
    console.log('Check 버튼이 클릭되었습니다.');
  };

  return (
    <>
      {isOpenModal && (
        <WhiteModal>
          <Title>{title}</Title>
          <TmiBody>{body}</TmiBody>
          <CheckBtn onClick={handleCheckBtnClick}>누구일까요?</CheckBtn>
        </WhiteModal>
      )}
    </>
  );
};

export default TmiOpenModalContent;

const Title = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #256cf8;
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  bottom: 2.75rem;
`;

const TmiBody = styled.div`
  font-size: 1.6rem;
  width: 28rem;
  height: 4rem;
  position: relative;
  bottom: 1.5rem;
`;

const CheckBtn = styled.div`
  width: 30.2rem;
  height: 5.3rem;
  color: white;
  background-color: #6c9eff;
  border: none;
  border-radius: 0.8rem;
  font-size: 2rem;
  position: relative;
  top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
