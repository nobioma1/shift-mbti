import styled from 'styled-components';

export const LoaderWrapper = styled.div<{ center: boolean }>`
  display: flex;
  ${({ center }) =>
    center
      ? `justify-content: center`
      : `
    width: 80px;
    justify-content: initial
    `};

  .bar-loader {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto;

    & > div {
      display: inline-block;
      position: absolute;
      left: 8px;
      width: 16px;
      background: #3d59fa;
      animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }

    @keyframes loader {
      0% {
        top: 8px;
        height: 64px;
      }
      50%,
      100% {
        top: 24px;
        height: 32px;
      }
    }

    & > div:nth-child(1) {
      left: 8px;
      animation-delay: -0.24s;
    }

    & > div:nth-child(2) {
      left: 32px;
      animation-delay: -0.12s;
    }

    & > div:nth-child(3) {
      left: 56px;
      animation-delay: 0;
    }
  }
`;
