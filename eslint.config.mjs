import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default defineConfig([
	globalIgnores(['**/dist/', 'src/shared/metadata/galleryImageMetadata.ts']),
	js.configs.recommended,
	react.configs.flat.recommended,
	react.configs.flat['jsx-runtime'],
	...typescriptEslint.configs['flat/recommended'],
	eslintConfigPrettier,
	{
		plugins: {
			react,
			'@typescript-eslint': typescriptEslint,
			'simple-import-sort': simpleImportSort,
			prettier: eslintPluginPrettier
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
			'prettier/prettier': 'error',
			'arrow-body-style': 'off',
			'prefer-arrow-callback': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error'
		}
	}
]);
