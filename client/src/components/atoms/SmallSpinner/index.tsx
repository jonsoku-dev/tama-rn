import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

interface Props {}

const SmallSpinner = (props: Props) => {
  return (
    <Wrapper>
      <Loader type="ThreeDots" color="#000000" height={10} width={10} />
    </Wrapper>
  );
};

export default SmallSpinner;

const Wrapper = styled('div')``;
