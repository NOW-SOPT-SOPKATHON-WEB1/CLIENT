import React, { useState } from 'react';
import * as s from './RoomJoin.style';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

const RoomJoin = () => {
  const [code, setCode] = useState("");
  return (
    <>
      <Header/>
      <s.Wrapper>
      <s.Title>방장에게 전달받은 코드를 입력하세요</s.Title>
        <s.Input
          type="text"
          value={code}
          placeholder='숫자 여섯 자리'
          onChange={(e) => setCode(e.target.value)}
        />
      </s.Wrapper>
      <Button>참여하기</Button>
    </>
  );
};

export default RoomJoin;
