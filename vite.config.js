import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		target: "esnext",
		minify: "terser",
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						// Isolate react core
						if (id.includes("react") || id.includes("react-dom")) {
							return "vendor-react";
						}
						// Isolate UI icons
						if (id.includes("react-icons")) {
							return "vendor-icons";
						}
						// Isolate dynamic/heavy animation libraries like Framer Motion or GSAP
						if (id.includes("framer-motion") || id.includes("gsap")) {
							return "vendor-animation";
						}
					}
				}
			}
		}
	}
});
