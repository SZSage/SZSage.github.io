import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	base: "/SZSage.github.io/",
	plugins: [react()],

	build: {
		manifest: true,
		rollupOptions: {
			input: 'src/main.tsx'
		}
    }
});
