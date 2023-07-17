import { StyledComponentsRegistry } from "@/registries/StyledComponentsRegistry";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { CustomThemeProvider } from "@/providers/CustomThemeProvider";
import GlobalStyle from "@/styles/global-styles";
import { LangProvider } from "@/context/LangContext";
import { languages } from "@/i18n/settings";
import { dir } from "i18next";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={quicksand.className}>
        <StyledComponentsRegistry>
          {/* <LangProvider> */}
          <CustomThemeProvider>
            <GlobalStyle />
            {children}
          </CustomThemeProvider>
          {/* </LangProvider> */}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
