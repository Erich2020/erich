import { ui, defaultLang, showDefaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const isProd = import.meta.env.PROD;
  const [, lang] = url.pathname.split(isProd ? "/" : "/erich/");
  console.log("Extracted lang from URL:", lang?.substring(0, 2), isProd, url.pathname);
  if (lang?.substring(0, 2) in ui)
    return lang?.substring(0, 2) as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
