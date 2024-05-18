import { useNavigate } from 'react-router-dom';
import * as s from './APage.style';

import svgbackground from '../../assets/landingPage';

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
      <img src={svgbackground.landingBackground} alt='landing_background' />
      <s.MainButton onClick={GotoBpage}>게임 시작하기</s.MainButton>
      <s.RuleDiv onClick={GotoRulePage}>게임 룰 보러 가기</s.RuleDiv>
    </section>
  );
};

export default APage;
