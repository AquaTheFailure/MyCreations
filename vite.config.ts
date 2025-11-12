import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace with your actual GitHub username and repository name
const GITHUB_USERNAME = 'AquaTheFailure';
const GITHUB_REPO = 'MyCreations';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `https://${GITHUB_USERNAME}.github.io/${GITHUB_REPO}/`, // Use absolute GitHub Pages URL
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
