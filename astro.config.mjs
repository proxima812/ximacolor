import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import versionsProxima from "@proxima812/astro-versions-proxima";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://color.xima.work",
	prefetch: {
		defaultStrategy: "load",
	},
  // я отключил пока что эти переходы. 
  // Боюсь, что запросы просто сожрут 
  // мой hobby тариф на vercel
	redirects: {
		"/ru": "/",
		"/es": "/",
		"/zh": "/",
		"/kk": "/",
		"/uk": "/",
	},
	i18n: {
		locales: ["en", "ru", "es", "zh", "tt", "kk", "uk"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: true,
		},
	},
	integrations: [
		sitemap(),
		icon(),
		versionsProxima({
			versionStrategy: "manual",
			version: "2.0.0",
			styling: { mode: "class" },
			header: { class: "site-version-badge" },
			footer: { class: "site-version-footer", label: "Site version:" },
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	adapter: vercel(),
	output: "static",
});
