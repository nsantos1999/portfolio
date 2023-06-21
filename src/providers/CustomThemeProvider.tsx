"use client";

import { theme } from "@/contants/theme.contants";
import { ThemeProvider } from "styled-components";

export function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
