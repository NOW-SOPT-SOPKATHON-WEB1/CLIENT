import React from 'react';
import * as s from "./Header.style"
import leftArrow from "../../assets/leftArrow.png"

const Header = ({isIcon, children}) => {
  return (
    <s.Wrapper>
      {isIcon && <s.Icon src={leftArrow} alt="Left Arrow Icon" />}
      <s.Header>{children}</s.Header>
    </s.Wrapper>
  );
};

export default Header;
