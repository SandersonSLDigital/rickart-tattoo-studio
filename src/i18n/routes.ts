export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

export type PageKey =
  | 'home'
  | 'portfolio'
  | 'flash'
  | 'about'
  | 'aftercare'
  | 'contact';

export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { pt: '', en: '' },
  portfolio: { pt: 'portfolio', en: 'portfolio' },
  flash: { pt: 'flash', en: 'flash' },
  about: { pt: 'sobre', en: 'about' },
  aftercare: { pt: 'cuidados', en: 'aftercare' },
  contact: { pt: 'contato', en: 'contact' },
};

export function pathFor(page: PageKey, lang: Lang): string {
  const slug = routes[page][lang];
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

export function alternateLang(lang: Lang): Lang {
  return lang === 'pt' ? 'en' : 'pt';
}
