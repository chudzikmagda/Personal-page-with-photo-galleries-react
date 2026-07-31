import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: ['babel-plugin-react-compiler']
			}
		}),
		svgr()
	],
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (!id.includes('node_modules')) return undefined;
					if (id.includes('swiper')) return 'swiper';
					if (id.includes('i18next')) return 'i18n';
					if (id.includes('react-ga4') || id.includes('react-hotjar')) return 'analytics';
					return 'vendor';
				}
			}
		}
	}
});
