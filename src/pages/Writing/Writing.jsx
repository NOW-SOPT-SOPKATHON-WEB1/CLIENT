import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import * as s from '../Writing/Writing.style';
import Button from '../../components/Button/Button';
import Background from '../../components/Background/Background';
import bgSrc from '../../assets/bgImg2.png';

const Writing = () => {
  const [name, setName] = useState('');
  const [tmi, setTmi] = useState('');
  return (
    <Background src={bgSrc}>
      <Header isIcon='true'>오늘의 TMI</Header>
      <s.Container>
        <s.Title>이름을 입력해 주세요</s.Title>
        <s.Input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <s.Title>오늘, 당신의 TMI는 무엇인가요?</s.Title>
        <s.TextInput
          type='text'
          value={tmi}
          onChange={(e) => setTmi(e.target.value)}
        />
      </s.Container>
      <Button>다음</Button>
    </Background>
  );
};

export default Writing;
