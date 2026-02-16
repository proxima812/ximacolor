export const tagOrder = [
	"glow",
	"mesh",
	"linear",
	"radial",
	"conic",
	"repeating",
	"multi-stop",
	"transparent",
	"border",
	"noise",
	"femme",
	"masc",
	"flag",
	"other",
] as const;

export type TagId = (typeof tagOrder)[number];

export function getCardTags(name: string): TagId[] {
	if (name.startsWith("flag-")) return ["flag"];
	if (name.startsWith("femme-")) return ["femme"];
	if (name.startsWith("masc-")) return ["masc"];
	if (name.startsWith("noise-overlay-")) return ["noise"];
	if (name.startsWith("mesh-neo-") || name.startsWith("mesh-")) return ["mesh"];
	if (name.startsWith("multi-stop-")) return ["multi-stop"];
	if (name.startsWith("repeating-")) return ["repeating"];
	if (name.startsWith("transparent-")) return ["transparent"];
	if (name.startsWith("glow-")) return ["glow"];
	if (name.startsWith("border-")) return ["border"];
	if (name.startsWith("linear-")) return ["linear"];
	if (name.startsWith("radial-")) return ["radial"];
	if (name.startsWith("conic-")) return ["conic"];
	return ["other"];
}
