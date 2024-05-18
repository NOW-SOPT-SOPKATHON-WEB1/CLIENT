import styled from '@emotion/styled';

const ButtonContainer = styled.button`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 335px;
  height: 72px;

  background-color: #4a4a4a;
  color: white;

  border: solid 1px #d6d6d6;
  border-radius: 8px;

  cursor: pointer;
`;

const Button = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
