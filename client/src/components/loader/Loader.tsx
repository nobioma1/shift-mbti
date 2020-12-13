import React from 'react';
import { LoaderWrapper } from './loader.styled';

interface ILoader {
  center: boolean;
}

const Loader = ({ center }: ILoader) => {
  return (
    <LoaderWrapper center={center}>
      <div className="bar-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
