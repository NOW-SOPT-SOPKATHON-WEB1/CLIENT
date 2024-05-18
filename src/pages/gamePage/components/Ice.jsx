import React from 'react';
import iceImg from '../../../assets/gamePage/ice.png';
import styled from '@emotion/styled';

/** 얼음~! */
const Ice = () => {
  return (
    <IceContainer>
      <IceImg src={iceImg} alt='ice' />
      <IceTouchBox
        onClick={() => {
          console.log('ice clicked');
        }}
      />
    </IceContainer>
  );
};

const IceContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: center;
  align-items: center;
`;
const IceImg = styled.img`
  width: 6rem;
  height: fit-content;
`;
const IceTouchBox = styled.div`
  position: absolute;
  width: 6rem;
  height: 3rem;
`;
export default Ice;
