Stormkit Static Site
====================

This is a minimal static site ready to deploy on Stormkit.io.

What’s included:
- index.html, styles.css, main.js
- stormkit.yml (no build step, output is the project root)

How to deploy on Stormkit
1) Create an account at https://www.stormkit.io/
2) Create a new project and connect your Git provider (GitHub, GitLab, Bitbucket).
3) Create a repository (or use an existing one) and add this folder’s contents at the repo root.
   - Alternatively, place these files in a subfolder and configure the project root accordingly during setup.
4) In Stormkit, during project setup:
   - If your repo has no build step, set build commands to empty (stormkit.yml already does this)
   - Set the output directory to "." (current directory)
5) Trigger a deployment by pushing to your repo’s default branch.
6) Stormkit will provide a deployment URL. Add a custom domain if you want, and enable HTTPS.

Local development
- Open index.html in your browser. It’s a pure static site.

Custom domain & caching
- Edit stormkit.yml to tune cache TTLs per file type.
- Set up your custom domain in the Stormkit dashboard and follow the DNS instructions.

Notes
- If you later switch to a framework (React, Vue, Next.js, etc.), update stormkit.yml with build commands and outputDirectory accordingly (e.g., "npm ci && npm run build" and outputDirectory: "dist").
