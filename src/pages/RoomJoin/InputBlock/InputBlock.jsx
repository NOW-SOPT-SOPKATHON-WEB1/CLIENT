import React, { forwardRef } from 'react';
import * as s from './InputBlock.style';

const InputBlock = forwardRef(({ code, inputRef }, ref) => {
  return (
    <s.Wrapper>
      <s.Block onClick={() => inputRef.current.focus()}>{code[0]}</s.Block>
      <s.Block>{code[1]}</s.Block>
      <s.Block>{code[2]}</s.Block>
      <s.Block>{code[3]}</s.Block>
      <s.Block>{code[4]}</s.Block>
      <s.Block>{code[5]}</s.Block>
    </s.Wrapper>
  );
});
export default InputBlock;
