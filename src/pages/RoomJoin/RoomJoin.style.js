import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100vh;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.7rem 2rem;
  gap: 1.7rem;
`;

export const Title = styled.span`
  align-self: flex-start;

  color: #fff;

  font-size: 18px;
  font-weight: 700;
  line-height: 150%; /* 27px */
  letter-spacing: -0.18px;
`;

export const Input = styled.input`
  width: 20rem;
  padding: 0.5rem;

  border: 1px solid #ccc;
  border-radius: 4px;

  background-color: #ececec;
  font-size: 1rem;
`;

export const CodeBlock = styled.div`
  display: flex;
`

export const CodeInput = styled.input`
  display: none;
  width: 100px;
`