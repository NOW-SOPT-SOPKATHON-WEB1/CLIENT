import React from 'react';
import styled from '@emotion/styled';
import Ice from './Ice';
import IceWhite from './IceWhite';

const IceGame = () => {
  return (
    <IceGameContainer>
      <IceFlexWrapper>
        <IceWhite />
        <IceWhite />
        <IceWhite />
        <IceWhite />
        <IceWhite />
      </IceFlexWrapper>
      <IceFlexWrapper>
        <IceWhite />
        <IceWhite />
        <Ice />
        <Ice />
        <Ice />
        <IceWhite />
      </IceFlexWrapper>
      <IceFlexWrapper>
        <IceWhite />
        <Ice />
        <Ice />
        <Ice />
        <IceWhite />
      </IceFlexWrapper>
      <IceFlexWrapper>
        <IceWhite />
        <IceWhite />
        <Ice />
        <Ice />
        <IceWhite />
        <IceWhite />
      </IceFlexWrapper>
      <IceFlexWrapper>
        <IceWhite />
        <IceWhite />
        <IceWhite />
        <IceWhite />
        <IceWhite />
      </IceFlexWrapper>
    </IceGameContainer>
  );
};
const IceFlexWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: -2.4rem;
`;
const IceGameContainer = styled.div`
  width: 375px;
  overflow-x: clip;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;
export default IceGame;
