import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100vh;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.5rem;
`;

export const Title = styled.p`
  align-self: flex-start;
`;

export const Input = styled.input`
  width: 20rem;
  padding: 0.5rem;

  border: 1px solid #ccc;
  border-radius: 4px;

  background-color: #ececec;
  font-size: 1rem;
`;
