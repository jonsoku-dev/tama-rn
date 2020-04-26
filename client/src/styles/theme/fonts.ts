export interface IFonts {
  h1: IFontProperty;
  h2: IFontProperty;
  h3: IFontProperty;
  h4: IFontProperty;
  body1: IFontProperty;
  body2: IFontProperty;
  body3: IFontProperty;
  body4: IFontProperty;
  caption: IFontProperty;
  navTitle: IFontProperty;
}

interface IFontProperty {
  fontSize: string;
  fontWeight: number;
}

export default {
  h1: {
    fontSize: '2.2rem',
    fontWeight: 800,
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  h3: {
    fontSize: '1.8rem',
    fontWeight: 700,
  },
  h4: {
    fontSize: '1.6rem',
    fontWeight: 400,
  },
  body1: {
    fontSize: '1.8rem',
    fontWeight: 400,
  },
  body2: {
    fontSize: '1.6rem',
    fontWeight: 400,
  },
  body3: {
    fontSize: '1.4rem',
    fontWeight: 400,
  },
  body4: {
    fontSize: '1.2rem',
    fontWeight: 400,
  },
  caption: {
    fontSize: '0.8em',
    fontWeight: 400,
  },
  navTitle: {
    fontSize: '1.6rem',
    fontWeight: 700,
  },
};
