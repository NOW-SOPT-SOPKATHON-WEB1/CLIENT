import React from 'react';
import * as s from './RoomCreate.style';
import { Dropdown } from './Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Background from '../../components/Background/Background';
import bgSrc from '../../assets/bgImg.png';

const RoomCreate = () => {
  return (
    <Background src={bgSrc}>
      <Header isIcon="true">얼음방 만들기</Header>
      <s.Container>
        <s.Title>인원수를 선택해 주세요</s.Title>
        <Dropdown />
      </s.Container>
      <Button>방 만들기</Button>
    </Background>
  );
};

export default RoomCreate;
