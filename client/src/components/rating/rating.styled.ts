import styled from 'styled-components';

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 29rem;

  p {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 0.875rem;

    &:first-child {
      color: #fa4344;
    }

    &:last-child {
      color: #00a079;
    }
  }

  input {
    width: 1.5rem;
    height: 1.5rem;
    border: 3px solid #aaaaaa;
    cursor: pointer;
  }
`;
