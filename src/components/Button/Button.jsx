import styled from '@emotion/styled';

const ButtonContainer = styled.button`
  position: absolute;
  bottom: 12%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 33.5rem;
  height: 5rem;

  background-color: #6C9EFF;
  color: white;

  border: solid 1px #d6d6d6;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.16px;
  cursor: pointer;
`;

const Button = ({ children, style }) => {
  return <ButtonContainer style={{...style}}>{children}</ButtonContainer>;
};

export default Button;
