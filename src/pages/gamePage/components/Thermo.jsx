import React from 'react';
import thermoBG from '../../../assets/gamePage/thermoBg.png';
import heart from '../../../assets/gamePage/thermoheart.png';
import styled from '@emotion/styled';
const Thermo = (height) => {
  return (
    <ThermoContainer>
      <ThermoBG src={thermoBG} alt='온도계 배경' />
      <ThermoMeterWrapper>
        <ThermoMeter h={140} />
        <ThermoHeart src={heart} />
      </ThermoMeterWrapper>
    </ThermoContainer>
  );
};

const ThermoMeter = styled.div`
  width: 1.7rem;
  height: ${({ h }) => `${h}px`};
  z-index: 3;
  background-color: #6c9eff;
  margin-bottom: 2rem;
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
  width: 6.7rem;
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
  bottom: 7px;
  width: 5.4rem;
  height: fit-content;
  z-index: 4;
`;
export default Thermo;
