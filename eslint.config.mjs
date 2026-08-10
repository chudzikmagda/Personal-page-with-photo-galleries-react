import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default defineConfig([
	globalIgnores(['**/dist/', 'src/shared/metadata/galleryImageMetadata.ts']),
	{
		extends: compat.extends(
			'eslint:recommended',
			'plugin:react/recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:prettier/recommended'
		),

		plugins: {
			react,
			'@typescript-eslint': typescriptEslint,
			'simple-import-sort': simpleImportSort
		},

		languageOptions: {
			globals: {
				...globals.browser
			},

			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',

			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},

		settings: {
			react: {
				version: 'detect'
			}
		},

		rules: {
			indent: [
				'error',
				'tab',
				{
					SwitchCase: 1
				}
			],

			quotes: ['error', 'single'],
			semi: ['error', 'always'],
			'@typescript-eslint/explicit-module-boundary-types': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error'
		}
	}
]);
