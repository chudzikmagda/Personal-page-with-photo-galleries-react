import js from '@eslint/js';
import ts from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default ts.config(
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.react-router/**',
      '.vite/**',
      '.cache/**',
      'public/**',
      '**/*.min.js',
      '**/*.bundle.js',
    ],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  }
);
