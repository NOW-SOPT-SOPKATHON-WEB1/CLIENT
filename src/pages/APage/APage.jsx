import Button from '../../components/Button/Button';
import APageComponent from './APageComponent/APageComponent';
import styled from '@emotion/styled';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function AnotherPage() {
  const navigate = useNavigate();

  const GotoBpage = () => {
    navigate('/bpage');
  };

  return (
    <MainDiv>
      <MainButton onClick={GotoBpage}>시작하기</MainButton>
    </MainDiv>
  );
}

const APage = () => {
  return <AnotherPage />;
};
export default APage;

const MainButton = styled.button`
  width: 243px;
  height: 50px;
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;
  background: #d9d9d9;
  border: none;
  cursor: pointer;
  position: relative;
`;

const MainDiv = styled.div`
  display: flex;
  width: 375px;
  height: 100%;
  padding-top: 531px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
