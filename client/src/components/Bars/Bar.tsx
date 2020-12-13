import React from 'react';
import { BarWrapper, StyledBar } from './bars.styled';

interface IBarProps {
  leftKey: string;
  rightKey: string;
  isLeft: boolean;
}

const Bar = ({ leftKey, rightKey, isLeft }: IBarProps) => {
  return (
    <BarWrapper>
      <p>{leftKey}</p>
      <StyledBar isLeft={isLeft} />
      <p>{rightKey}</p>
    </BarWrapper>
  );
};

export default Bar;
