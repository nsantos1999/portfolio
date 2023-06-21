"use client";

import { Theme } from "@/@types/theme.types";

export const theme: Theme = {
  palette: {
    primary: {
      dark: "#273a4d",
      light: "#465e75",
      main: "#34495e",
      contrast: "#FFF",
    },
    secondary: {
      dark: "#1a71ab",
      light: "#5ab5f2",
      main: "#3498db",
      contrast: "#000",
    },
  },
  typography: {
    fontFamily: {
      bold: "arial",
      normal: "arial",
    },
    fontSize: {
      content: 20,
      title: 24,
    },
  },
};
