import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import * as s from '../Writing/Writing.style';
import Button from '../../components/Button/Button';
import Background from '../../components/Background/Background';
import bgSrc from '../../assets/bgImg2.png';
import postTMI from '../../apis/postTMI';
import IntroModalContent from '../../components/modal/IntroModalContent';

const Writing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [tmi, setTmi] = useState('');
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (name && tmi) setNext(true);
    else setNext(false);
  }, [name, tmi]);

  const postCreateRes = async () => {
    const res = await postTMI(name, tmi);
  };
  const handleBtn = () => {
    if (next) {
      setIsModalOpen(true);
      postCreateRes();
    }
  };
  return (
    <>
      <Background src={bgSrc}>
        <Header isIcon='true'>오늘의 TMI</Header>
        <s.Container>
          <s.Title>이름을 입력해 주세요</s.Title>
          <s.Input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='홍길동'
          />
          <s.Title>오늘, 당신의 TMI는 무엇인가요?</s.Title>
          <s.TextInput
            type='text'
            value={tmi}
            onChange={(e) => setTmi(e.target.value)}
            placeholder={`오늘 아침에 직접 샐러드를 만들어 먹었어요.\n뭔가 부족하다 싶었는데, 드레싱을 까먹고 안 뿌렸지 뭐예요!\n다들 드레싱 좋아하시나요? 어떤 드레싱 좋아하세요?\n(최대 100자 가능)`}
          />
        </s.Container>
        <div onClick={handleBtn}>
          <Button style={{ backgroundColor: !next && '#CFE0FF' }}>
            멜팅하러 가기
          </Button>
        </div>
      </Background>
      {isModalOpen && <IntroModalContent />}
    </>
  );
};

export default Writing;
