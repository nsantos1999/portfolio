import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";
import { TranslationOptions } from "./@types/translation.types";
import { useLang } from "@/context/LangContext";

const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: string, namespace: string) => {
        console.log(language, namespace);
        return import(`./locales/${language}/${namespace}.json`);
      })
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(
  ns: string,
  options: TranslationOptions = {}
) {
  const { currentLang } = useLang();

  const i18nextInstance = await initI18next(currentLang, ns);
  return {
    t: i18nextInstance.getFixedT(
      currentLang,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}
