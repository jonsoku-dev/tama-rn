import styled, { css } from 'styled-components';

const editorFontSize = (addSize?: number) => css`
  * {
    font-size: ${(addSize ?? 0) + 1.5}rem;
  }
`;

export const P = styled.p`
  ${editorFontSize()}
`;

export const Blockquote = styled.blockquote`
  ${editorFontSize()};
  border-left: 2px solid #ddd;
  margin-left: 0;
  margin-right: 0;
  padding-left: 10px;
  color: #aaa;
  font-style: italic;
`;

export const H1 = styled.h1`
  ${editorFontSize(2)}
`;

export const H2 = styled.h1`
  ${editorFontSize(1)}
`;

export const Ul = styled.ul`
  ${editorFontSize()}
`;

export const Li = styled.li`
  ${editorFontSize()}
`;

export const Ol = styled.ol`
  ${editorFontSize()}
`;
