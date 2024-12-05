import styled from 'styled-components';

export const StyledImage = styled.img<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  object-fit: contain;
`;
