import styled from '@emotion/styled';
import landing from '../../assets/gamePage/landing.png';

export const MainButton = styled.button`
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
  top: 230px;
`;
export const MainDiv = styled.div`
  width: 100%;
  height: 73vh;
  background-image: url(${landing}),
    linear-gradient(180deg, #6c9eff 0%, #ddd 100%);
  background-size: cover, cover;
  background-position: center, center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RuleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grayscale-gray09, #525252);
  width: 10rem;
  position: relative;
  top: 2rem;
  /* Text/Body01: SemiBold */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  letter-spacing: -0.14px;
  margin-left: 135px;
  margin-top: -50px;
  border-bottom: 1px solid #8f8f8f;
  cursor: pointer;
`;
