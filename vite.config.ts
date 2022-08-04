/// <reference types="vitest" />
/// <reference types="vite/client" />

import 'dotenv/config';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@/': path.resolve(__dirname, './src'),
			'@/api': path.resolve(__dirname, './src/api'),
			'@/assets': path.resolve(__dirname, './src/assets'),
			'@/components': path.resolve(__dirname, './src/components'),
			'@/hooks': path.resolve(__dirname, './src/hooks'),
			'@/routes': path.resolve(__dirname, './src/routes'),
			'@/store': path.resolve(__dirname, './src/store'),
			'@/types': path.resolve(__dirname, './src/types'),
			'@/utils': path.resolve(__dirname, './src/utils'),
			'@/views': path.resolve(__dirname, './src/views'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setup.ts',
		coverage: {
			statements: 80,
			branches: 80,
			functions: 80,
			lines: 80,
		},
	},
	define: {
		'process.env': process.env,
	},
});
