# Nicolás Rojas Portfolio

A sophisticated personal portfolio website built with **Astro v5**. This project features a modern, geometric aesthetic with a monochromatic forest green palette and gold accents, designed for a professional Architectural & Technical tone.

## 🚀 Tech Stack

- **Framework:** [Astro v5](https://astro.build/)
- **i18n:** Built-in Internationalization (EN/ES supported)
- **Content Management:** [Sanity CMS](https://www.sanity.io/)
- **Frontend Logic:** React
- **Styling:** Vanilla CSS with a custom design system
- **Design:** Geometric forms, overlapping layers, and high-contrast accents

## 📂 Project Structure

```text
/
├── public/          # Static assets
├── src/
│   ├── components/  
│   │   ├── pages/   # Complex page components
│   │   └── *.astro  # UI components (Hero, Header, etc.)
│   ├── lib/         # Sanity client & utilities
│   ├── pages/       
│   │   ├── [lang]/  # Internationalized routes
│   │   └── 404.astro# Custom error page
│   ├── layouts/     # Base layouts
│   └── styles/      # Global CSS and design tokens
└── package.json
```

## ✨ Key Features

- **Multi-language Support (i18n):** Full localization support for English and Spanish, with dynamic routing.
- **Headless CMS integration:** Content management via **Sanity CMS** with real-time fetching.
- **Component-Based Architecture:** Page logic abstracted into specialized components for better maintainability.
- **Custom 404 Page:** Unique error handling matching the site's architectural aesthetic.
- **Dynamic Content:** Optimized image delivery and dynamic project/blog routing.
- **Design System:** Comprehensive CSS variables for a consistent Forest Green & Gold theme.

## 🚀 Getting Started

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📐 Design Philosophy

The site follows a "Formal Architectural" aesthetic, utilizing:
- **Overlapping Forms:** To create depth and visual interest.
- **Varied Color Depths:** From deep green backgrounds to lighter forest accents.
- **Gold Micro-animations:** Subtle hover effects to guide interaction.

## 📄 License

This project is licensed under the MIT License - feel free to reproduce and use it for learning purposes.
