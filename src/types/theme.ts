declare module "@mui/material/styles" {
  interface Palette {
    header?: string;
    footer?: string;
  }
}

type TextPalette = {
  primary: string;
  secondary: string;
  disabled: string;
};

type Primary = {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
};

export type Palette = {
  text: TextPalette;
  primary: Primary;
  footer: string;
  header: string;
};

export type Theme = {
  palette: Palette;
};
