import styled from 'styled-components';

export const Button = styled.button`
  background: #3d59fa;
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
  width: 155px;
  height: 36px;
  border-radius: 3px;

  &:hover {
    background: #3d59ac;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
