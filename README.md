# Cinematic Portfolio SPA

Premium portfolio built with Next.js 15 App Router, TypeScript, TailwindCSS, Framer Motion, React Three Fiber, Drei, ReactBits-style animation primitives, Three.js, and Lenis.

## Install Commands

```bash
npm install next@15 react@19 react-dom@19 framer-motion three @react-three/fiber @react-three/drei lenis react-bits lucide-react clsx tailwind-merge
npm install -D typescript @types/node @types/react @types/react-dom tailwindcss @tailwindcss/postcss postcss autoprefixer eslint eslint-config-next
```

## Run

```bash
npm run dev
npm run build
npm run start
```

## Dependency List

- Next.js 15 App Router
- TypeScript
- TailwindCSS
- Framer Motion
- Three.js
- React Three Fiber
- React Drei
- ReactBits package plus local ReactBits-style primitives
- Lenis smooth scroll
- Lucide React
- clsx and tailwind-merge

## File Structure

```txt
app/
  globals.css
  layout.tsx
  page.tsx
animations/
  motion.ts
components/
  custom-cursor.tsx
  loading-screen.tsx
  navbar.tsx
  scroll-progress.tsx
  section-heading.tsx
  smooth-scroll-provider.tsx
  react-bits/
    magnetic.tsx
    split-text.tsx
    spotlight-card.tsx
  three/
    scene.tsx
hooks/
  use-mouse-position.ts
  use-prefers-reduced-motion.ts
lib/
  data.ts
  utils.ts
public/
  site.webmanifest
sections/
  about.tsx
  contact.tsx
  experience.tsx
  hero.tsx
  projects.tsx
  skills.tsx
```
