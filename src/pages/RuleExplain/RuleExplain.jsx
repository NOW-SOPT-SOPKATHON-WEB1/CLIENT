import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import hands from '../../assets/gamePage/hands.png';

const RuleExplain = () => {
  const navigate = useNavigate();
  const GotoBpage = () => {
    navigate('/bpage');
  };
  return (
    <div style={{width: "375px", height: "667px"}}>
      <Img src={hands} alt='악수'></Img>
      <WrapperDiv>
        <HeaderDiv>멜팅에 어서 오세요.</HeaderDiv>
        <ContentWrapper>
          <ContentDiv>멜팅 서비스는 처음 만난 사람들과</ContentDiv>
          <ContentDiv>
            오프라인에서 사용하기 좋은 아이스브레이킹 게임입니다.
          </ContentDiv>
          <ContentWrapper>
            <ContentDiv>[게임 방법]</ContentDiv>
            <ContentDiv2> 1. 4~12인의 참가자를 모집해요.</ContentDiv2>
            <ContentDiv2> 2. 방을 생성하거나 코드로 참여해요.</ContentDiv2>
            <ContentDiv2> 3. 나에 대한 TMI를 작성해요.</ContentDiv2>
            <ContentDiv2> 4. 얼음을 깨며 TMI의 주인을 찾아요.</ContentDiv2>
          </ContentWrapper>
        </ContentWrapper>
      </WrapperDiv>

      <MainButton onClick={GotoBpage}>게임 시작하기</MainButton>
    </div>
  );
};

export default RuleExplain;

const HeaderDiv = styled.div`
  color: var(--color-blue-03-primary, #256cf8);
  position: relative;
  padding-left: 2rem;
  /* Text/Head01: Bold */
  font-family: Pretendard;
  font-size: 29px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.29px;
`;

const ContentDiv = styled.div`
  position: relative;
  padding-left: 2rem;
  width: 380px;
  color: var(--color-grayscale-gray08, #666);

  /* Text/Body01: SemiBold */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  letter-spacing: -0.14px;
`;

const ContentDiv2 = styled.div`
  position: relative;
  padding-left: 3rem;
  width: 380px;
  color: var(--color-grayscale-gray08, #666);

  /* Text/Body01: SemiBold */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  letter-spacing: -0.14px;
`;

const WrapperDiv = styled.div`
  position: fixed;
  padding-top: 7rem;
  width: 375px;
  height: 667px;
  background: var(
    --color-bg-gradient,
    linear-gradient(0deg, #cfe0ff 0%, #fff 100%)
  );
`;

const ContentWrapper = styled.div`
  position: fixed;
  padding-top: 3rem;
`;

const MainButton = styled.button`
  width: 350px;
  height: 50px;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.16px;
  border-radius: 10px;
  background: var(--color-blue02, #6c9eff);
  padding: 15px 124px;
  border: none;
  cursor: pointer;
  position: relative;
  top: 590px;
  left: 15px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  position: fixed;
  padding-top: 38rem;
  padding-left: 15rem;
  z-index: 2;
`;
