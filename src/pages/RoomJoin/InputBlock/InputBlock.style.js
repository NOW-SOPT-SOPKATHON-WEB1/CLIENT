import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 4px;
`;
export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.5rem;
  height: 4.5rem;

  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: linear-gradient(
    315deg,
    rgba(255, 255, 255, 0.7) 2.58%,
    rgba(255, 255, 255, 0.3) 97.92%
  );
  backdrop-filter: blur(5px);

  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 150%; /* 27px */
  letter-spacing: -0.18px;
`;
