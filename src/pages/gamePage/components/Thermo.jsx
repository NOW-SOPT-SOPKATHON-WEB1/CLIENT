import React from 'react';
import thermoBG from '../../../assets/gamePage/thermoBg.png';
import heart from '../../../assets/gamePage/thermoheart.png';
import styled from '@emotion/styled';
const Thermo = ({ pplNum, maxpplNum }) => {
  return (
    <ThermoContainer>
      <ThermoBG src={thermoBG} alt='온도계 배경' />
      <ThermoMeterWrapper>
        <ThermoMeter h={140 - pplNum * (140 / maxpplNum)} />
        <ThermoHeart src={heart} />
      </ThermoMeterWrapper>
    </ThermoContainer>
  );
};

const ThermoMeter = styled.div`
  width: 1rem;
  height: ${({ h }) => `${h}px`};
  z-index: 3;
  margin-bottom: 2rem;
  border-radius: 50px;
  background: linear-gradient(180deg, #6c9eff 0%, #fff 100%);
`;
const ThermoContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`;
const ThermoBG = styled.img`
  position: relative;
  width: 4.8rem;
`;
const ThermoMeterWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0rem;
  justify-content: center;
  align-items: baseline;
`;
const ThermoHeart = styled.img`
  position: absolute;
  bottom: 9px;
  width: 3.1rem;
  height: fit-content;
  z-index: 4;
`;
export default Thermo;
