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

export interface ShadowGenerateFunction {
  x?: number;
  y?: number;
  blurRadius?: number;
  spreadRadius?: number;
  opacity?: number;
}

export interface Shadow {
  low: (props: ShadowGenerateFunction) => string;
  medium: (props: ShadowGenerateFunction) => string;
  high: (props: ShadowGenerateFunction) => string;
}

export interface Theme {
  palette: ThemePalette;
  typography: ThemeTypography;
  shadow: Shadow;
}
