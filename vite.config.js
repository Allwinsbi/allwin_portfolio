import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages. Set to "/<repo-name>/" in production so
// assets resolve correctly when served from https://<user>.github.io/<repo-name>/.
// Update REPO_NAME if the repository is ever renamed.
const REPO_NAME = 'allwin_portfolio'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? `/${REPO_NAME}/` : '/',
}))
