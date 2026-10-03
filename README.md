# Vangrex Agents

A Next.js landing page and design system for Vangrex Agents, built with Tailwind CSS v4, shadcn/ui, GSAP, and Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project structure

- `src/app/page.tsx` contains the landing page.
- `src/app/globals.css` defines the Vangrex design tokens, light and dark palettes, layout styles, and responsive behavior.
- `src/components/theme-provider.tsx` configures system-aware theme persistence.
- `src/components/theme-toggle.tsx` provides the light and dark mode control.
- `src/components/agent-network.tsx` combines the animated agent network illustration with a Motion-powered spring tilt and GSAP ScrollTrigger choreography.
- `src/components/scroll-reveal.tsx` provides reduced-motion-aware Motion reveals and staggered feature entrances.
- `src/components/ui/` contains the shadcn/ui components.

## Useful commands

```bash
npm run dev
npm run build
npm start
```

The theme uses semantic shadcn CSS variables, with Vangrex brand tokens layered on top. New UI components can be added with `npx shadcn@latest add <component>`.
