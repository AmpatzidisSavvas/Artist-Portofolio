import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
	plugins: [react()],
	base: mode === "production" ? "Artist-Portofolio" : "/",
	server: {
		open: true
	}
}));
