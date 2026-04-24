import { defineConfig } from 'vite'  // Importation de la fonction defineConfig pour définir la configuration de Vite
import react from '@vitejs/plugin-react'  // Importation du plugin React pour Vite afin de supporter les fichiers JSX et les fonctionnalités de React

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: './' 
})
