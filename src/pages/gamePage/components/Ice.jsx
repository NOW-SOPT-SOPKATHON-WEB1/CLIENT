import React, { useEffect, useState } from 'react';
import iceImg from '../../../assets/gamePage/ice.png';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

/** 얼음~! */
const Ice = ({ handleTMIModal, decreasePPlnum }) => {
  const [touched, setTouched] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        setHidden(true);
      }, 480);
      return () => clearTimeout(timer);
    }
  }, [touched]);

  const handleIceClick = () => {
    console.log('ice clicked');
    handleTMIModal();
    decreasePPlnum();
    setTouched(true);
  };
  return (
    <IceContainer touched={touched} hidden={hidden}>
      <IceImg src={iceImg} alt='ice' />
      <IceTouchBox onClick={handleIceClick} />
    </IceContainer>
  );
};

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const IceContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.touched &&
    css`
      animation: ${fadeOut} 0.5s ease-out;
    `}
  ${(props) =>
    props.hidden &&
    css`
      visibility: hidden;
    `}
`;
const IceImg = styled.img`
  width: 7.7rem;
`;
const IceTouchBox = styled.div`
  position: absolute;
  width: 6rem;
  height: 3rem;
`;
export default Ice;
