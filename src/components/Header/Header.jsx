import React from 'react';
import * as s from './Header.style';
import leftArrow from '../../assets/leftArrow.png';
import { useNavigate } from 'react-router-dom';

const Header = ({ isIcon, children }) => {
  const navigate = useNavigate();

  return (
    <s.Wrapper>
      {isIcon && (
        <s.Icon
          src={leftArrow}
          alt='Left Arrow Icon'
          onClick={() => navigate(-1)}
        />
      )}
      <s.Header>{children}</s.Header>
    </s.Wrapper>
  );
};

export default Header;
