import Button from '../../components/Button/Button';
import APageComponent from './APageComponent/APageComponent';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import * as s from './APage.style';

const APage = () => {
  const navigate = useNavigate();
  const GotoBpage = () => {
    navigate('/bpage');
  };

  const GotoRulePage = () => {
    navigate('/rule');
  };
  return (
    <section>
      <s.MainDiv>
        <s.MainButton onClick={GotoBpage}>게임 시작하기</s.MainButton>
      </s.MainDiv>
      <div></div>
      <s.RuleDiv onClick={GotoRulePage}>게임 룰 보러 가기</s.RuleDiv>
    </section>
  );
};

export default APage;
