import React, { useEffect, useState } from 'react';
import * as s from './RoomCreate.style';
import { Dropdown } from './Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Background from '../../components/Background/Background';
import bgSrc from '../../assets/bgImg.png';
import CreateRoomModalContent from '../../components/modal/CreateRoomModalContent';
import postCreate from '../../apis/postCreate';

const RoomCreate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memberCnt, setMemberCnt] = useState(4);

  const postCreateRes = async () => {
    const res = await postCreate(memberCnt);
  };

  const handleBtn = () => {
    setIsModalOpen(true);
    postCreateRes();
  }
  return (
    <>
      <Background src={bgSrc}>
        <Header isIcon='true'>얼음방 만들기</Header>
        <s.Container>
          <s.Title>인원수를 선택해 주세요</s.Title>
          <Dropdown memberCnt={memberCnt} setMemberCnt={setMemberCnt} />
        </s.Container>
        <div onClick={handleBtn}>
          <Button>방 만들기</Button>
        </div>
      </Background>
      {isModalOpen && <CreateRoomModalContent />}
    </>
  );
};

export default RoomCreate;
