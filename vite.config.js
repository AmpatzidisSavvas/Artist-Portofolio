import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		target: "esnext",
		// Enable minification optimizations
		cssCodeSplit: true,

		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						// 1. Core React ecosystem (Critical initial render)
						if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) {
							return "vendor-react";
						}

						// 2. Heavy Animation Libraries (Defer completely until main content triggers)
						if (id.includes("framer-motion") || id.includes("gsap") || id.includes("@motionone")) {
							return "vendor-animation";
						}

						// 3. Icons (Isolate icon packs)
						if (id.includes("react-icons") || id.includes("lucide-react")) {
							return "vendor-icons";
						}

						// 4. Vercel Analytics / Speed Insights (Non-critical metrics)
						if (id.includes("@vercel")) {
							return "vendor-vercel";
						}

						// 5. All other third-party dependencies into a generic chunk
						return "vendor-others";
					}
				}
			}
		}
	}
});
