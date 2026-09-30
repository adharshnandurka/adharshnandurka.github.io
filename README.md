# Adharsh Nandurka — Personal Portfolio

An interactive, high-performance developer portfolio built with React 18 and Vite, featuring an interactive 60 FPS cursor-tracking 3D character canvas with zero ghosting, luxury typography, and smooth micro-animations.

Live Website: [https://adharshnandurka.github.io](https://adharshnandurka.github.io)

---

## 🚀 Features

- **Interactive Character Canvas**: 60 FPS real-time cursor tracking using pre-rendered multi-angle WebP keyframes with shortest-path angular lerp interpolation and zero-lag physics.
- **Responsive Luxury Aesthetic**: Vermillion-accented dark palette (`#d81f15`), frosted-glass headers (`backdrop-filter`), and refined typography (Syne + Plus Jakarta Sans + Space Mono).
- **Custom Magnetic Cursor**: Dual-element glowing cursor dot with trailing aura ring and deadzone reaction states.
- **Comprehensive Portfolio Sections**:
  - **About Me**: Cloud & Infrastructure specialization, GET L1 at Infolob Solutions, core competencies, and certifications.
  - **Experience**: Structured Azure Cloud enterprise training, infrastructure deployment, networking, and security.
  - **Education**: MCA graduate (2025) from Nizam College, Osmania University.
  - **Projects**: Resilient 3-tier AWS cloud architecture, automated CI/CD pipelines, container orchestration with Kubernetes & Docker.
  - **Contact & Connect**: Direct contact cards, email/phone copy-to-clipboard, resume download, and social profiles.
- **Server-Side Build & Deploy**: Automated GitHub Actions CI/CD workflow deploying Vite production bundles directly to GitHub Pages.

---

## 🛠️ Tech Stack

- **Frontend**: [React 18](https://react.dev/), [Vite 5](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Custom design tokens, fluid clamp typography, zero external UI bloat)
- **Graphics**: HTML5 2D Canvas with sub-frame requestAnimationFrame loop
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Syne, Plus Jakarta Sans, Space Mono, Dancing Script)
- **CI/CD**: GitHub Actions (`deploy-pages` and `upload-pages-artifact`)

---

## 💻 Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or v20+ recommended)
- `npm` or `pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/adharshnandurka/adharshnandurka.github.io.git

# Navigate into the project folder
cd adharshnandurka.github.io

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Building for Production

```bash
npm run build
```

The production output will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Automated GitHub Pages Deployment

The repository includes a GitHub Actions workflow located at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Every push to the `main` branch triggers an automated build on Ubuntu Linux runners and deploys the optimized build output directly to GitHub Pages.

To ensure your GitHub repository enables Pages:
1. Go to repository **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
