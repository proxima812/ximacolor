import en from "./locales/en";
import ru from "./locales/ru";
import es from "./locales/es";
import zh from "./locales/zh";
import tt from "./locales/tt";
import kk from "./locales/kk";
import uk from "./locales/uk";

export type Locale = "en" | "ru" | "es" | "zh" | "tt" | "kk" | "uk";

type Dictionary = typeof en;
export type TranslationKey = keyof Dictionary;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ru,
  es,
  zh,
  tt,
  kk,
  uk,
};

export function isLocale(value: string): value is Locale {
  return value in dictionaries;
}

export function t(locale: Locale, key: TranslationKey): string {
  return dictionaries[locale][key] ?? dictionaries.en[key];
}
