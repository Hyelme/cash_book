import * as path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {

	const env = loadEnv(mode, process.cwd(), '');
	return {
		plugins: [react()],
		define: {
			__APP_ENV__: env.APP_ENV,
			"process.env": env
		},
		server: {
			port: 3000,
		},
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
		optimizeDeps: {
			force: true,
			esbuildOptions: {
				loader: {
					".js": "jsx",
				},
			},
		}
}
});