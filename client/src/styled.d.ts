import 'styled-components';
import { IColors } from './styles/theme/colors';
import { IFonts } from './styles/theme/fonts';

declare module 'styled-components' {
  export interface DefaultTheme {
    space: number;
    colors: IColors;
    fonts: IFonts;
  }
}
