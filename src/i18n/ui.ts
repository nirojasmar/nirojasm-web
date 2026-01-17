export const languages = {
    en: 'English',
    es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.blog': 'Blog',
        'hero.greeting': "Hello, I'm",
        'hero.role': '.NET Developer & DevOps Engineer',
        'hero.intro': 'Bridging the gap between complex systems and intuitive design. I build scalable solutions with precision and elegance.',
        'hero.viewWork': 'View Work',
        'hero.contact': 'Contact Me',
        'hobbies.title': 'Interests & Hobbies',
        'projects.title': 'Selected Works',
        'projects.viewSource': 'View Source',
        'projects.challenge': 'The Challenge',
        'projects.process': 'The Process',
        'blog.title': 'Recent Thoughts',
        'blog.viewAll': 'View All',
        'footer.rights': 'Crafted with geometry & code.',
        '404.title': 'Page Not Found',
        '404.desc': "The coordinate system seems to be broken here. This page doesn't exist in our current geometry.",
        '404.back': 'Return Home',
        'contact.title': 'Get in Touch',
        'contact.subtitle': 'Have a project in mind or just want to say hi? I\'d love to hear from you!',
        'contact.email': 'Send me an email',
        'contact.github': 'View GitHub Profile'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.projects': 'Proyectos',
        'nav.blog': 'Blog',
        'hero.greeting': 'Hola, soy',
        'hero.role': 'Desarrollador .NET & Ingeniero DevOps',
        'hero.intro': 'Uniendo sistemas complejos con diseño intuitivo. Construyo soluciones escalables con precisión y elegancia.',
        'hero.viewWork': 'Ver Trabajo',
        'hero.contact': 'Contáctame',
        'hobbies.title': 'Intereses y Hobbies',
        'projects.title': 'Trabajos Seleccionados',
        'projects.viewSource': 'Ver Código',
        'projects.challenge': 'El Desafío',
        'projects.process': 'El Proceso',
        'blog.title': 'Pensamientos Recientes',
        'blog.viewAll': 'Ver Todo',
        'footer.rights': 'Creado con geometría y código.',
        '404.title': 'Página No Encontrada',
        '404.desc': 'El sistema de coordenadas parece estar roto. Esta página no existe en nuestra geometría actual.',
        '404.back': 'Volver al Inicio',
        'contact.title': 'Contáctame',
        'contact.subtitle': '¿Tienes un proyecto en mente o simplemente quieres saludar? ¡Me encantaría escucharte!',
        'contact.email': 'Envíame un correo',
        'contact.github': 'Ver perfil de GitHub'
    },
} as const;

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
