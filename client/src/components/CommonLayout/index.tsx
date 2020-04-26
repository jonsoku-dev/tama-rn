import React from 'react';
import styled, { css } from 'styled-components';
import { mediaQueries } from '../../styles/mediaQuery';
import AppHeader from '../organisms/AppHeader';

interface IProps {
  className?: string;
  noHeader?: boolean;
  noFooter?: boolean;
}
const CommonLayout: React.SFC<IProps> = ({
  noHeader = false,
  noFooter = false,
  className,
  children,
}) => {
  return (
    <LayoutWrapper className={className}>
      {!noHeader && <AppHeader />}
      <section>{children}</section>
      {!noFooter && <footer>footer</footer>}
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  ${(props) => css`
    margin-top: ${props.theme.space * 2}px;
    padding: 0 ${props.theme.space * 2}px;
    grid-gap: ${props.theme.space}px;
  `}
  display: grid;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 72px;
  ${mediaQueries('tablet')`
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  `}
`;

export default CommonLayout;
