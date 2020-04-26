import 'normalize.css';
import { createGlobalStyle, css } from 'styled-components';
import formReset from './formReset';

const global = css`
  * {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Nanum Gothic', sans-serif;
  }
  *:not(pre) > code {
    font-size: 2.5rem;
    font-family: monospace;
    background-color: #eee;
    padding: 3px;
  }
`;

export default createGlobalStyle`
  ${global}
  ${formReset}
`;
