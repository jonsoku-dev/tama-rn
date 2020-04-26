import { css } from 'styled-components';

export const ellipsis = (width?: string) => {
  return css`
    width: 320px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;
};
