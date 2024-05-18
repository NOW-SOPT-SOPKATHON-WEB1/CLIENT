import styled from '@emotion/styled';
import React from 'react';

function ModalCheckBtn({ onClick }) {
  return <CheckBtn onClick={onClick}>확인</CheckBtn>;
}

export default ModalCheckBtn;

const CheckBtn = styled.button`
  width: 25rem;
  height: 4.1rem;
  color: white;
  background-color: #787878;
  border: none;
  border-radius: 0.8rem;
  font-size: 2rem;
`;
