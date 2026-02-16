import type { Locale } from "../i18n";

export const SITE_URL = (import.meta.env.PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, "");

export const DEFAULT_LOCALE: Locale = "en";

export const SUPPORTED_LOCALES: Locale[] = ["en", "ru", "es", "zh", "tt", "kk", "uk"];

export const LAST_UPDATED_ISO = "2026-02-16T02:02:00";
