import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
}

const Category = ({ name }: Props) => {
  return (
    <Wrapper>
      <span>{name}</span>
    </Wrapper>
  );
};

export default Category;

const Wrapper = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  padding: ${(props) => `${props.theme.space / 2}px ${props.theme.space}px`};
  background-color: ${(props) => props.theme.colors.base.black};
  border-radius: 4px;
  span {
    color: ${(props) => props.theme.colors.base.white};
    font-size: 0.3rem !important;
  }
`;
