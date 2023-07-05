"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

export interface LangProviderInterface {
  children: React.ReactNode;
  // locale: string
}

export interface LangContextInterface {
  currentLang: string;
  setCurrentLang(currentLang: string): void;
  allLangs: string[];
}

const allLangs = ["pt-BR", "en-US"];

const LangContext = createContext({} as LangContextInterface);

export async function LangProvider({ children }: LangProviderInterface) {
  const params = useParams();

  const [currentLang, setCurrentLang] = useState(params.lng);

  return (
    <LangContext.Provider value={{ currentLang, allLangs, setCurrentLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
