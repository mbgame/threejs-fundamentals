import { defineConfig } from 'vite';
import path from 'path';


export default defineConfig({
  root: path.resolve(__dirname, 'src'), // Set the root directory to 'src'
  publicDir: '../static/',
  base: '/threejs-fundamentals/',
});
