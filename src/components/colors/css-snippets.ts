import fs from "node:fs";
import path from "node:path";

function escapeRegExp(value: string) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getCssSnippetByClassName(gradientsCssText: string, className: string) {
	const escapedClass = escapeRegExp(className);
	const ruleRegex = new RegExp(`(^|\\n)\\s*\\.${escapedClass}\\s*\\{([\\s\\S]*?)\\n\\s*\\}`, "m");
	const match = gradientsCssText.match(ruleRegex);
	if (!match) return `.${className} {\n  /* style not found */\n}`;
	return `.${className} {\n${match[2].trimEnd()}\n}`;
}

export function buildCssSnippetMap(colors: readonly string[]) {
	const gradientsCssText = fs.readFileSync(path.resolve(process.cwd(), "src/styles/gradients.css"), "utf8");
	return Object.fromEntries(
		colors.map((name) => {
			const className = `radial-${name}`;
			return [className, getCssSnippetByClassName(gradientsCssText, className)];
		}),
	) as Record<string, string>;
}
