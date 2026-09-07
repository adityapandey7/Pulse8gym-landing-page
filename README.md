# Pulse8 Gym — Landing Page & Membership Portal

High-conversion landing page for **Pulse8 Gym** (Hyderabad) covering Srinagar Colony, Abids, and Marredpally branches. Built with React 19, TypeScript, Vite, and Tailwind CSS.

---

## 🚀 GitHub Actions Deployment (GitHub Pages)

This project includes a ready-to-use GitHub Actions workflow configured in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that automatically builds and deploys your site to **GitHub Pages** whenever you push to the `main` or `master` branch.

### 1. Enable GitHub Pages in your Repository Settings

1. Push this project to your GitHub repository.
2. In your repository on GitHub, navigate to **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment** → **Source**, select **GitHub Actions** (instead of "Deploy from a branch").
4. That's it! Pushing a commit to `main` or triggering the workflow manually under the **Actions** tab will deploy your site.

### 2. Custom Domain (Optional)

If you wish to use a custom domain (such as `pulse8gym.in` or `pulse8gym.com`):
1. In your GitHub repository, go to **Settings** → **Pages**.
2. Under **Custom domain**, enter your domain name and save.
3. Configure your DNS provider with the CNAME / A records provided by GitHub.

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start local dev server (port 3000)
npm run dev

# Build for production (outputs to /dist)
npm run build

# Preview the production build locally
npm run preview
```

---

## 📦 Project Structure

- `src/components/`: Modular React components (Hero, Offers, Google Reviews, Video Reviews, Locations, FAQs, Lead Forms).
- `src/data/gymData.ts`: Centralized branch info, Google Business reviews, video testimonials, FAQs, and pricing.
- `.github/workflows/deploy.yml`: Automated CI/CD pipeline for GitHub Pages.
- `vite.config.ts`: Vite build configuration with relative asset paths for static host compatibility.
