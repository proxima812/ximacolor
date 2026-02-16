import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import versionsProxima from "@proxima812/astro-versions-proxima";

export default defineConfig({
	adapter: vercel(),
	output: "static",
	site: process.env.PUBLIC_SITE_URL || "https://example.com",
	trailingSlash: "always",
	i18n: {
		locales: ["en", "ru", "es", "zh", "tt", "kk", "uk"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: true,
		},
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en-US",
					ru: "ru-RU",
					es: "es-ES",
					zh: "zh-CN",
					tt: "tt-RU",
					kk: "kk-KZ",
					uk: "uk-UA",
				},
			},
			filter: (page) => {
				try {
					return new URL(page).pathname !== "/";
				} catch {
					return true;
				}
			},
		}),
    icon(),
   versionsProxima({
      versionStrategy: "manual",
      version: "1.3.1",
      styling: { mode: "class" },
      header: { class: "site-version-badge" },
      footer: { class: "site-version-footer", label: "Site version:" },
    }),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
