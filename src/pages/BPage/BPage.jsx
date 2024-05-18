import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import penguin01 from '../../assets/gamePage/penguin01.png';
import svgitems from '../../assets/gamePage';

function AnotherPage() {
  const navigate = useNavigate();

  const GotoCpage = () => {
    navigate('/room-create');
  };
  const GotoDpage = () => {
    navigate('/room-join');
  };
  return (
    <section>
      <BackDiv>
        <WrapperDiv>
          <HeaderImg src={svgitems.meltinglogo}></HeaderImg>
        </WrapperDiv>
        <WrapperButtion>
          <Button onClick={GotoCpage}>방 만들기</Button>

          <Button onClick={GotoDpage}>참여하기</Button>
        </WrapperButtion>
      </BackDiv>

      <MalImg src={svgitems.malpungson} alt='펭귄 말풍선' />

      <Img src={svgitems.penguin} alt='팽귄'></Img>
    </section>
  );
}

const BPage = () => {
  return <AnotherPage />;
};
export default BPage;

const BackDiv = styled.div`
  width: 375px;
  height: 667px;
  background: var(
    --color-bg-gradient,
    linear-gradient(0deg, #cfe0ff 0%, #fff 100%)
  );
`;

const WrapperDiv = styled.div`
  display: flex;
  width: 375px;
  padding: 17px 0px 16px 0px;
  justify-content: center;
  align-items: center;
`;

const HeaderImg = styled.img`
  margin-top: 20px;
`;

const WrapperButtion = styled.div`
  position: relative;
  margin-top: 8rem;
  margin-left: -1rem;
  display: inline-flex;
  align-items: flex-start;
`;
const Button = styled.button`
  color: var(--color-grayscale-gray09, #525252);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.18px;

  width: 160px;
  height: 160px;
  border: none;
  border-radius: 15px;
  border: 1px solid #d6d6d6;
  background: var(--color-blue01, #cfe0ff);

  margin-left: 26px;
  cursor: pointer;
  :hover {
    border-radius: 15px;
    border: 1px solid #d6d6d6;
    background: #6f6f6f;
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.27px;
  }
`;

const MalImg = styled.img`
  position: relative;
  bottom: 25rem;
  left: 2rem;
`;

const Img = styled.img`
  position: relative;
  bottom: 30.3rem;
  left: 13rem;
  width: 240px;
  height: 240px;
`;
