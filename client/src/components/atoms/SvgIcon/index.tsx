import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  size?: number;
  src: string;
  onClick?: any;
  className?: string;
}

const SvgIcon = ({ size = 20, src, onClick, className }: Props) => {
  return <SvgIconItem className={className} size={size} onClick={onClick} src={src} alt={'icon'} />;
};

const SvgIconItem = styled.img<{ size: number }>`
  ${(props) => css`
    width: ${props.size}px;
    height: ${props.size}px;
  `}
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SvgIcon;
