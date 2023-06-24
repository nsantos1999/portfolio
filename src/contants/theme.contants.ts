"use client";

import { Theme } from "@/@types/theme.types";

export const theme: Theme = {
  palette: {
    primary: {
      dark: "#090912",
      light: "#1b1b29",
      main: "#10101A",
      contrast: "#FFF",
    },
    secondary: {
      dark: "#662a80",
      light: "#b96fd9",
      main: "#8E44AD",
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
  shadow: {
    // low: ({ x = 0, y = 0, blurRadius = 5, spreadRadius = 0, opacity = 0.2 }) =>
    //   `box-shadow: ${x} ${y} ${blurRadius}px ${spreadRadius} rgba(0, 0, 0, ${opacity});`,
    low: ({ x = 0, y = 0, blurRadius = 5, spreadRadius = 0, opacity = 0.2 }) =>
      `${x}px ${y}px ${blurRadius}px ${spreadRadius}px rgba(0, 0, 0, ${opacity})`,
    medium: ({
      x = 0,
      y = 0,
      blurRadius = 10,
      spreadRadius = 0,
      opacity = 0.3,
    }) =>
      `${x}px ${y}px ${blurRadius}px ${spreadRadius}px rgba(0, 0, 0, ${opacity})`,
    high: ({
      x = 0,
      y = 0,
      blurRadius = 20,
      spreadRadius = 0,
      opacity = 0.4,
    }) =>
      `${x}px ${y}px ${blurRadius}px ${spreadRadius}px rgba(0, 0, 0, ${opacity})`,
    // low: `box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);`,
    // medium: `box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);`,
    // high: `box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);`,
  },
};
