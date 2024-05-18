import styled from '@emotion/styled';

export const Container = styled.div`
  box-sizing: border-box;

  padding-left: 2rem;
`;

export const Title = styled.div`
  color: white;

  padding: 1.8rem 0 1rem 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.18px;
`;

export const Input = styled.input`
  width: 33.5rem;
  height: 5.3rem;
  padding: 1rem 2rem;

  border: 0;
  border-radius: 10px;

  color: #525252;
  background-color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 150%; /* 27px */
  letter-spacing: -0.18px;

  &:focus {
    outline: none;
  }
`;

export const TextInput = styled.textarea`
  width: 33.5rem;
  height: 15rem;

  padding: 1.7rem 1.9rem;

  border: 0;
  border-radius: 10px;

  resize: none;

  color: #525252;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.14px;
  &:focus {
    outline: none;
  }
`;
