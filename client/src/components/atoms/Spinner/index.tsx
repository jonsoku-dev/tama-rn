import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

interface Props {}

const Spinner = (props: Props) => {
  return (
    <Wrapper>
      <Loader type="ThreeDots" color="#000000" height={30} width={30} />
    </Wrapper>
  );
};

export default Spinner;

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
