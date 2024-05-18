import React from 'react';
import * as s from './RoomCreate.style';
import { Dropdown } from './Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

const RoomCreate = () => {
  return (
    <>
      <Header/>
      <s.Title>인원수를 선택해 주세요</s.Title>
      <s.Wrapper>
        <Dropdown />
      </s.Wrapper>
      <Button>방 만들기</Button>
    </>
  );
};

export default RoomCreate;
