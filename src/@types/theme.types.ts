export interface Color {
  light: string;
  main: string;
  dark: string;
  contrast: string;
}

export interface ThemePalette {
  primary: Color;
  secondary: Color;
}

export interface FontFamily {
  normal: string;
  bold: string;
}

export interface FontSize {
  title: number;
  content: number;
}

export interface ThemeTypography {
  fontSize: FontSize;
  fontFamily: FontFamily;
}

export interface Theme {
  palette: ThemePalette;
  typography: ThemeTypography;
}
