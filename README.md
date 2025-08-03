# Portfolio

A modern, responsive portfolio website built with React, TypeScript, and cutting-edge web technologies. Features an interactive project carousel showcasing GitHub repositories with enhanced user experience.

## 🚀 Live Demo

[View Live Portfolio](https://my-portfolio-v2-xi-lake.vercel.app/)

## ✨ Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Interactive Project Carousel**:
  - Infinite loop navigation with autoplay
  - Tooltips for truncated project names
  - Non-selectable text for smooth drag interactions
  - Proper spacing and overflow handling
- **Internationalization**: Multi-language support with automatic language detection
- **Modern UI Components**: Built with Shadcn/ui component library
- **Type Safety**: Full TypeScript implementation
- **Performance Optimized**: Code splitting and lazy loading
- **Accessibility**: ARIA compliant components

## 🛠️ Tech Stack

### Core Framework
- **[React 19.1.0](https://react.dev/)** - UI library with latest features
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 7.0.4](https://vitejs.dev/)** - Fast build tool and dev server

### Routing & State Management
- **[@tanstack/react-router](https://tanstack.com/router)** - Type-safe routing with code splitting
- **[@tanstack/react-query](https://tanstack.com/query)** - Server state management and data fetching
- **[React Hook Form](https://react-hook-form.com/)** - Performant form handling
- **[Zod](https://zod.dev/)** - Schema validation

### UI & Styling
- **[Tailwind CSS 4.1.11](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library
- **[Class Variance Authority](https://cva.style/)** - Component variant management

### Carousel & Animations
- **[Embla Carousel](https://www.embla-carousel.com/)** - Lightweight carousel library
- **[Embla Carousel Autoplay](https://www.embla-carousel.com/plugins/autoplay/)** - Autoplay functionality
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - CSS animations for Tailwind

### Internationalization
- **[i18next](https://www.i18next.com/)** - Internationalization framework
- **[react-i18next](https://react.i18next.com/)** - React bindings for i18next
- **[i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector)** - Language detection

### Development Tools
- **[Biome](https://biomejs.dev/)** - Fast formatter and linter
- **[Ultracite](https://www.npmjs.com/package/ultracite)** - Development utilities
- **[@tanstack/react-query-devtools](https://tanstack.com/query/latest/docs/framework/react/devtools)** - Query debugging
- **[@tanstack/react-router-devtools](https://tanstack.com/router/latest/docs/framework/react/devtools)** - Router debugging

### Utilities
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # Shadcn/ui components
│   └── header.tsx      # Navigation header
├── routes/             # Page components (Tanstack Router)
│   ├── __root.tsx      # Root layout
│   ├── index.tsx       # Home page
│   ├── about.tsx       # About page
│   ├── projects.tsx    # Projects carousel
│   └── contact.tsx     # Contact form
├── lib/                # Utility functions
├── i18n/               # Internationalization config
├── assets/             # Static assets
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfoliov4
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Adding New Components

Use Shadcn/ui CLI to add new components:
```bash
npx shadcn@latest add [component-name]
```

### Styling

- Global styles: `src/index.css`
- Component styles: Tailwind classes
- Theme configuration: `components.json`

### Internationalization

Add new languages in `src/i18n/i18n.ts` and create corresponding translation files.

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Enhanced layout for medium screens
- **Desktop**: Full-featured experience for large screens

## ♿ Accessibility

- ARIA compliant components
- Keyboard navigation support
- Screen reader friendly
- High contrast support

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - Shadcn/ui configuration
- `biome.jsonc` - Code formatting and linting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Feel free to reach out through the contact form on the website or connect with me on social media.

---

**Built with ❤️ using modern web technologies**
