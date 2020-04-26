export interface IColors {
  base: Base;
  main: Main;
  text: Text;
}

interface Base {
  white: string;
  black: string;
  grey: string;
  darkGrey: string;
}

interface Main {
  primary: string;
  secondary: string;
  tertiary: string;
}

interface Text {
  lightPrimary: string;
  lightSecondary: string;
  darkPrimary: string;
  darkSecondary: string;
}

export default {
  base: {
    white: '#FFFFFF',
    black: '#111111',
    grey: '#e2e2e2',
    darkGrey: '#3b3b3b',
  },
  main: {
    primary: '#272343',
    secondary: '#e3f6f5',
    tertiary: '#bae8e8',
  },
  text: {
    lightPrimary: '#F7F7F7',
    lightSecondary: '#B7B7B7',
    darkPrimary: '#333333',
    darkSecondary: '#777777',
  },
};
