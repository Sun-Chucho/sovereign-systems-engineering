import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        architecture: resolve(import.meta.dirname, 'architecture.html'),
        energy: resolve(import.meta.dirname, 'energy.html'),
        infrastructure: resolve(import.meta.dirname, 'infrastructure.html'),
        intelligence: resolve(import.meta.dirname, 'intelligence.html'),
        global: resolve(import.meta.dirname, 'global.html'),
        evidence: resolve(import.meta.dirname, 'evidence.html')
      }
    }
  }
});
