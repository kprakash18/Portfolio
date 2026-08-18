#  Prakash's Portfolio — macOS Sequoia Interactive Desktop

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-Azure_Static_Apps-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)](https://white-pebble-08561b600.7.azurestaticapps.net)
[![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP_Animations-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)

**An interactive, Apple-inspired macOS desktop portfolio showcasing full-stack systems, backend architecture, and live projects.**

[Explore Live Demo](https://white-pebble-08561b600.7.azurestaticapps.net) • [Report Issue](https://github.com/kprakash18/Portfolio/issues) • [Connect on LinkedIn](https://www.linkedin.com/in/k-prakash-420b06330)

</div>

---

## 🌟 Overview

This portfolio simulates the full macOS operating system experience in the browser. Built with **React 19**, **GSAP**, **Tailwind CSS**, and **Zustand**, it features floating draggable windows, a dynamic magnification Dock, an interactive zsh terminal, and live desktop applications.

---

## ✨ Features

### 🖥️ Desktop & Window Management
- **GSAP Draggable Windows**: Full drag-and-drop window physics with viewport bounding, maximizing, minimizing, and z-index elevation.
- **Natural Desktop Layout**: 8 interactive project folders staggered across the wallpaper with metadata inspection and external repository/demo links.
- **Physics Magnification Dock**: Smooth distance-scaled icon magnification modeled after macOS Dock physics.

### 💻 Interactive Shell Terminal (`Terminal.app`)
- **Rich Command Router**: Full shell interface supporting auto-completion (`Tab`), history navigation (`↑` / `↓`), and 15+ built-in commands:
  - `skills` / `techstack`: Technical proficiency categories.
  - `projects` / `1-8`: Direct project browser and Finder integration.
  - `open <target>`: Launch any app or project directory.
  - `about` / `bio`: Background overview.
  - `blogs` / `articles`: Published engineering articles.
  - `contact`: Social channels and interactive copy options.
  - `email` / `mail`: Copies email directly to the clipboard.
  - `neofetch` / `prakash`: System specifications and ASCII art logo.
  - `theme <dark|light>`: Scoped terminal theme customizer.
  - `matrix`: Full digital rain animation overlay (`ESC` to exit).
  - `sudo hire`: Confetti shower and root developer verification.
  - `clear` / `cls`: Terminal viewport flush.

### 🌓 Independent Theme Architecture
- **Strict Theme Decoupling**: The Screen OS theme (Apple-inspired Dark/Light mode) and Terminal-scoped themes operate 100% independently.
- **Accessible Menu Bar Switch**: ARIA-compliant theme toggle in the top status bar.

### ⚡ Performance & Code-Splitting
- **Dynamic Lazy Loading**: `Resume.jsx` and its PDF rendering engine (`pdfjs-dist`) are dynamically loaded on-demand via `React.lazy()` and `<Suspense>`, cutting the initial JavaScript bundle size by **>50%** (down to 403 kB).
- **GPU-Accelerated Canvas**: High-DPI DPR particle engine for confetti and Matrix effects.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Core Framework** | React 19, JavaScript (ESNext), Vite 8 |
| **Styling & Design** | Tailwind CSS, Vanilla CSS Design Tokens, Apple UI Guidelines |
| **Animations & Physics** | GSAP (GreenSock), GSAP Draggable Plugin, HTML5 Canvas API |
| **State Management** | Zustand, Immer |
| **Document Rendering** | `react-pdf`, `pdfjs-dist` (Code-split) |
| **Icons & UI** | Lucide React, Custom macOS SVG Icons |
| **Deployment** | Azure Static Web Apps, GitHub Actions CI/CD |

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### 1. Clone the repository
```bash
git clone https://github.com/kprakash18/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be output to the `dist/` directory.

---

## 📂 Project Structure

```text
├── index.html                  # Minimal cross-platform HTML5 entry
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration & path aliases
├── public/
│   ├── images/                 # Wallpapers, app icons, and previews
│   ├── icons/                  # SVG system icons
│   └── files/
│       └── resume.pdf          # Full developer resume
└── src/
    ├── components/             # Desktop, Navbar, Dock, Welcome Hero, Theme Toggle
    ├── constants/              # Centralized projects, tech stacks, and metadata
    ├── hoc/                    # WindowWrapper (GSAP dragging & lifecycle management)
    ├── store/                  # Zustand stores (window state, location, theme)
    ├── utils/                  # Terminal router, canvas animations
    ├── windows/                # Apps: Terminal, Finder, Safari, Resume, Contacts, Photos
    ├── index.css               # Design system tokens and Apple dark theme
    ├── App.jsx                 # Root desktop assembler
    └── main.jsx                # React DOM root
```

---

## 📬 Contact & Connect

- **Engineer**: Prakash (Full-Stack & Backend Engineer)
- **Email**: [kethavathprakash18@gmail.com](mailto:kethavathprakash18@gmail.com)
- **LinkedIn**: [linkedin.com/in/k-prakash-420b06330](https://www.linkedin.com/in/k-prakash-420b06330)
- **GitHub**: [@kprakash18](https://github.com/kprakash18)

---

<div align="center">
  <sub>Built with care and attention to detail. Designed in the spirit of macOS.</sub>
</div>
