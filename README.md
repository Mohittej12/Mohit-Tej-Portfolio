# Mohit Tej - Personal Portfolio

A sleek, interactive personal portfolio website showcasing my professional experience, skills, projects, and achievements. Designed and built with a modern stack focusing on performance, mobile responsiveness, and beautiful animations.

## Technologies Used

* **Frontend Framework:** React 18 with Vite
* **Styling:** Tailwind CSS + `shadcn/ui` components
* **Animations:** Framer Motion & TSParticles (60fps optimized for mobile)
* **Routing:** Wouter (Lightweight React router)
* **Data Fetching:** React Query v5
* **Form Handling:** React Hook Form + Zod validation

## Features

* **Interactive Hero:** Built with `tsparticles` for an immersive floating nodes background, alongside animated code snippets parsing developer workflows.
* **Responsive Design:** Completely mobile-friendly experience using a dynamic hamburger navigation overlay and touch-friendly components.
* **Component-Level Optimizations:** Built with granular particle limits and exact React `useCallback` hook optimizations to avoid heavy battery load or Safari browser crashes on mobile.
* **Smooth Page Transitions:** Section-to-section reveal animations utilizing `framer-motion` `useScrollSpy` behavior.
* **Dark Theme Ready:** Supports aesthetic global theming contexts.

## Project Structure (Monorepo)

* **`artifacts/portfolio`** - This is the primary root of the frontend React Application. Ensure you run commands from inside this directory.

## Getting Started Locally

### 1. Install Dependencies
```bash
cd artifacts/portfolio
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
This generates a production-ready bundle located in the `artifacts/portfolio/dist` folder.

## Deployment

This portfolio is easily deployable on Vercel, Netlify, or any static hosting provider.
* Simply link this GitHub repository in your Vercel Dashboard.
* Ensure you configure the root directory to `artifacts/portfolio`.
* Use the Vite preset (`npm run build`).

## Author
Gowrabathuni Mohit Tej - [LinkedIn](https://linkedin.com/in/mohit-tej-gowrabathuni-9abaa9354) | [GitHub](https://github.com/Mohittej12) 
