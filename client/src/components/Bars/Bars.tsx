import React from 'react';
import Bar from './Bar';

interface IBarsProps {
  result: string;
}

const Bars = ({ result }: IBarsProps) => {
  return (
    <div>
      <Bar
        leftKey="Introversion (I)"
        rightKey="Extraversion (E)"
        isLeft={result.includes('I')}
      />
      <Bar
        leftKey="Sensing (S)"
        rightKey="Intuition (N)"
        isLeft={result.includes('S')}
      />
      <Bar
        leftKey="Thinking (T)"
        rightKey="Feeling (F)"
        isLeft={result.includes('T')}
      />
      <Bar
        leftKey="Judging (J)"
        rightKey="Perceiving (P)"
        isLeft={result.includes('J')}
      />
    </div>
  );
};

export default Bars;
