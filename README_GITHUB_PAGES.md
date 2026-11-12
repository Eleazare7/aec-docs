# AEC DOCs v126 — GitHub Pages release

This folder is a **repository-ready** static web application. The main page is `index.html`; the 66 template modules and `logic/cards.json` are included in their relative paths. `.github/workflows/deploy-pages.yml` publishes the site whenever changes are pushed to the `main` branch.

## Initial setup

1. Sign in to GitHub and create a repository named `aec-docs` with `main` as default branch. Consider visibility carefully: a public GitHub Pages site is accessible publicly; do not upload confidential project data or credentials.
2. Extract the ZIP locally and upload/commit **the contents of the extracted folder** to the repository root (not the ZIP archive itself). GitHub Desktop or `git` is easiest for the many files.
3. Under **Settings > Pages > Build and deployment > Source**, choose **GitHub Actions**.
4. Open the **Actions** tab. The `Publish AEC DOCs to GitHub Pages` workflow runs on push to `main`; you can also run it manually.
5. Once deployment succeeds, find the live URL in **Settings > Pages**; normally `https://YOUR-USERNAME.github.io/aec-docs/`.

## Future updates

Replace the changed files, commit, and push to `main`. GitHub Actions automatically deploys those changes at the **same URL**. A change made inside this chat **does not** publish to GitHub unless the updated files are committed/pushed.

## Critical limitations

- GitHub Pages hosts static files and does **not** provide a shared database, login/authorization, real-time multiuser document syncing, backups, or private file storage.
- Existing local-storage-based project data is browser/device dependent; code deployments do not merge it across devices. A separate authenticated backend is required for shared updates.
- If the application relies on Claude/Artifact-specific services in some features, those services will not automatically exist on GitHub Pages; test the deployment feature-by-feature.
- This deployment workflow has been prepared and statically checked, but has **not** been deployed to a user GitHub account.
