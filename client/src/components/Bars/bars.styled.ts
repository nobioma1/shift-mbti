import styled from 'styled-components';

export const StyledBar = styled.div<{ isLeft: boolean }>`
  width: 13.75rem;
  height: 0.9375rem;
  background: #e9ecef;
  border-radius: 3px;
  background-image: linear-gradient(
    ${({ isLeft }) => (isLeft ? 'to left' : 'to right')},
    transparent 50%,
    #a920cb 50%
  );
`;

export const BarWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 6.5rem auto 8rem;
  align-items: center;
  margin-bottom: 1.3125rem;

  p {
    font-size: 0.875rem;
    font-weight: 500;
    color: #878787;
  }
`;
