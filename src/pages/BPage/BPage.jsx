import BPageComponent from './BPageComponent/BPageComponent';
import styled from '@emotion/styled';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function AnotherPage() {
  const navigate = useNavigate();

  const GotoCpage = () => {
    navigate('/cpage');
  };
  const GotoDpage = () => {
    navigate('/dpage');
  };
  return (
    <section>
      <WrapperDiv>
        <div></div>
      </WrapperDiv>
      <div>
        <Div></Div>
        <Button onClick={GotoCpage}>방 만들기</Button>

        <Button onClick={GotoDpage}>참여하기</Button>
      </div>
    </section>
  );
}

const BPage = () => {
  return <AnotherPage />;
};
export default BPage;

const HeaderName = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.402px;
`;

const WrapperDiv = styled.div`
  display: inline-flex;
  height: 60px;
  padding: 17px 275px 16px 20px;
  align-items: center;
`;

const Button = styled.button`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.27px;

  width: 147px;
  height: 184px;
  border-radius: 8px;
  border: 1px solid #d6d6d6;
  background: #fff;

  margin-left: 26px;
  cursor: pointer;
  :hover {
    border-radius: 8px;
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

const Div = styled.div`
  height: 142px;
  border-top: 1px solid #ccc;
  background: #fff;
`;
