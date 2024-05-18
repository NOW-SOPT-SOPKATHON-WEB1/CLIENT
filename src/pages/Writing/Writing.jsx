import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import * as s from '../Writing/Writing.style';
import Button from '../../components/Button/Button';
import Background from '../../components/Background/Background';

const Writing = () => {
  const [name, setName] = useState('');
  const [tmi, setTmi] = useState('');
  return (
    <Background>

    <s.Wrapper>
      <Header />
      <s.Container>
        <s.Title>이름을 입력하세요</s.Title>
        <s.Input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        <s.Title>당신의 TMI 는 무엇인가요?</s.Title>
        <s.Input
          type='text'
          value={tmi}
          onChange={(e) => setTmi(e.target.value)}
          style={{height: 335}}
          />
      </s.Container>
      <Button>다음</Button>
    </s.Wrapper>
          </Background>
  );
};

export default Writing;
