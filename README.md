# Nicolás Rojas Marín Portfolio

A sophisticated personal portfolio website built with **Astro v5**. This project features a modern, geometric aesthetic with a monochromatic forest green palette and gold accents, designed for a professional Architectural & Technical tone.

## 🚀 Tech Stack

- **Framework:** [Astro v5](https://astro.build/)
- **Styling:** Vanilla CSS with a custom design system
- **Content Management:** [Sanity CMS](https://www.sanity.io/) (Headless CMS)
- **Frontend Logic:** React (for CMS integrations)
- **Typography:** Outfit (Headings) & Inter (Body)
- **Design:** Geometric forms, overlapping layers, and high-contrast accents

## 📂 Project Structure

```text
/
├── public/          # Static assets
├── src/
│   ├── components/  # Site components (Header, Hero, Hobbies, etc.)
│   ├── content/     # (Optional) Local content collections
│   ├── lib/         # Utility libraries (Sanity client, etc.)
│   ├── layouts/     # Page layouts
│   ├── pages/       # Route pages (index, projects/, blog/)
│   └── styles/      # Global CSS and design tokens
└── package.json
```

## ✨ Key Features

- **Headless CMS integration:** Content for projects and blog posts is managed via **Sanity CMS**, providing a robust editing interface.
- **Hero Section:** High-impact introduction for **Nicolás Rojas Marín**, highlighting .NET & DevOps expertise.
- **Dynamic Content:** Real-time content fetching from Sanity with optimized image delivery via `@sanity/image-url`.
- **Dynamic Routing:** Automatic route generation for individual project and blog pages.
- **Pagination & Filtering:** Paginated list views for both projects and technical blog posts.
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
