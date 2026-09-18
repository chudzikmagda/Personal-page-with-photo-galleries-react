import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite';
import babel from '@rolldown/plugin-babel';
import reactCompiler from 'babel-plugin-react-compiler';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    reactRouter(),
    babel({
      parserOpts: {
        plugins: ['jsx', 'typescript'],
      },
      plugins: [[reactCompiler, { target: '19' }]],
    } as never),
    svgr(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(import.meta.dirname, './app'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(import.meta.dirname, './app')],
      },
    },
  },
});
