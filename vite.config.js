import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		target: "esnext",
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						// 1. Core React + Animation libraries together to prevent evaluation order issues
						if (/\/node_modules\/(react|react-dom|scheduler|framer-motion|gsap|@motionone)\//.test(id)) {
							return "vendor-core";
						}

						// 2. Icons (Isolate icon packs)
						if (id.includes("react-icons") || id.includes("lucide-react")) {
							return "vendor-icons";
						}

						// 3. Vercel Analytics / Speed Insights
						if (id.includes("@vercel")) {
							return "vendor-vercel";
						}

						// 4. Fallback chunk for all other node_modules
						return "vendor-others";
					}
				}
			}
		}
	}
});
