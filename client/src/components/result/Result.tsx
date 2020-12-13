import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import Bars from '../Bars';
import { ResultWrapper } from './result.styled';

const Result = () => {
  const { state } = useLocation<{ result: string }>();

  if (!state?.result) {
    return <Redirect to="/" />;
  }

  return (
    <ResultWrapper>
      <div>
        <h3>Your Perspective</h3>
        <p>Your Perspective Type is {state.result}</p>
      </div>
      <Bars result={state.result} />
    </ResultWrapper>
  );
};

export default Result;
