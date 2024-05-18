import React from 'react';
import styled from '@emotion/styled';
import Ice from './Ice';

const IceGame = () => {
  return (
    <IceGameContainer>
      <IceFlexWrapper>
        <Ice />
        <Ice />
      </IceFlexWrapper>
      <IceFlexWrapper>
        <Ice />
        <Ice />
        <Ice />
      </IceFlexWrapper>
      <IceFlexWrapper>
        <Ice />
        <Ice />
      </IceFlexWrapper>
    </IceGameContainer>
  );
};
const IceFlexWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: -28px;
`;
const IceGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;
export default IceGame;
