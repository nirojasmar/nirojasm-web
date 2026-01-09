import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

export function getRouteFromUrl(url: URL): string {
    const pathname = url.pathname;
    const parts = pathname.split('/');
    if (parts[1] && parts[1] in ui) {
        const path = parts.slice(2).join('/');
        return path ? `/${path}` : '/';
    }
    return pathname;
}
