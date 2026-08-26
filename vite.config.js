import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		target: "esnext",
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						// Match exact directory names: /node_modules/react/ or /node_modules/react-dom/
						if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) {
							return "vendor-react";
						}
						if (id.includes("react-icons")) {
							return "vendor-icons";
						}
						if (id.includes("framer-motion") || id.includes("gsap")) {
							return "vendor-animation";
						}
					}
				}
			}
		}
	}
});
