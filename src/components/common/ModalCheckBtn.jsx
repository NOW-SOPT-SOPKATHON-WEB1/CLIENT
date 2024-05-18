import styled from '@emotion/styled';
import React from 'react';

function ModalCheckBtn({ onClick }) {
  return <CheckBtn onClick={onClick}>확인</CheckBtn>;
}

export default ModalCheckBtn;

const CheckBtn = styled.button`
  width: 250px;
  height: 41px;
  color: white;
  background-color: #787878;
  border: none;
  border-radius: 8px;
  font-size: 20px;
`;
