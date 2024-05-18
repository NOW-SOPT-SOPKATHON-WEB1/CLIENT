import React, { useEffect, useState } from 'react';
import Modal from '../common/Modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from '@emotion/styled';
import codeBG from '../../assets/modal/codeBG.svg';
import { useNavigate } from 'react-router-dom';

const CreateRoomModalContent = () => {
  const [value, setValue] = useState('000000');
  const [isOpenModal, setOpenModal] = useState(true);
  const navigate = useNavigate();
  const onClickToggleModal = () => {
    setOpenModal(false);
    navigate('/writing');
  };

  useEffect(() => {
    setValue(Math.floor(100000 + Math.random() * 900000)+'');
  }, []);
  return (
    <>
      {isOpenModal && (
        <Modal>
          <TitleWrapper>
            <h5>얼음방이 생성되었습니다</h5>
          </TitleWrapper>

          <NumberDisplay>
            {value.split('').map((digit, index) => (
              <NumberContainer key={index}>
                <NumberImage src={codeBG} alt='code bg' />
                <NumberText>{digit}</NumberText>
              </NumberContainer>
            ))}
          </NumberDisplay>

          <CopyToClipboard
            text={value}
            onCopy={() => alert('방 코드가 복사되었습니다.')}
          >
            <CopyBtn onClick={onClickToggleModal} type='button'>
              초대코드 복사하기
            </CopyBtn>
          </CopyToClipboard>
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
  font-size: 1.8rem;
  color: #fff;

  h5 {
    font-size: 1.8rem;
  }
`;

const NumberDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem 0;
  width: 23rem;
  height: 4.5rem;
`;

const CopyBtn = styled.button`
  width: 30.2rem;
  height: 5.3rem;
  color: white;
  background-color: #6c9eff;
  border: none;
  border-radius: 0.8rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

const NumberContainer = styled.div`
  position: relative;
`;

const NumberImage = styled.img`
  margin-right: 0.5rem;
`;

const NumberText = styled.span`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  color: #525252;
  font-size: 1.8rem;
  font-weight: bolder;
`;

export default CreateRoomModalContent;
