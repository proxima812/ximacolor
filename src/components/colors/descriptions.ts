import type { Locale } from "../../i18n";

type LocaleKey = Locale;

const skipTokens = new Set([
	"linear",
	"radial",
	"conic",
	"repeating",
	"multi",
	"stop",
	"transparent",
	"mesh",
	"neo",
	"noise",
	"overlay",
	"femme",
	"masc",
	"border",
	"glow",
	"flag",
]);

const usages: Record<LocaleKey, string[]> = {
	ru: ["под hero-секцию с контрастной типографикой", "под карточки продукта и pricing-блок", "под фоновую секцию лендинга", "под акцентную CTA-зону", "под баннер в маркетинговом экране", "под тёмный интерфейс дашборда"],
	en: ["for hero sections with contrast typography", "for product cards and pricing blocks", "for landing page background sections", "for accent CTA zones", "for marketing banners", "for dark dashboard layouts"],
	es: ["para hero con tipografia contrastada", "para tarjetas de producto y bloque de precios", "para secciones de fondo en landing", "para zonas CTA de acento", "para banners de marketing", "para interfaz oscura de dashboard"],
	zh: ["适合高对比标题的主视觉区块", "适合产品卡片与定价模块", "适合落地页背景区域", "适合CTA强调区", "适合营销横幅", "适合深色仪表盘界面"],
	tt: ["контраст типографикасы булган hero өчен", "продукт карточкалары һәм бәя блогы өчен", "лендингның фон секциясе өчен", "CTA акцент зонасы өчен", "маркетинг баннеры өчен", "караңгы dashboard өчен"],
	kk: ["контраст типографикасы бар hero үшін", "өнім карталары мен баға блогы үшін", "landing бетінің фон секциясы үшін", "CTA акцент аймағы үшін", "маркетинг баннері үшін", "қара dashboard интерфейсі үшін"],
	uk: ["для hero-секції з контрастною типографікою", "для карток продукту та блоку ціни", "для фонової секції лендингу", "для акцентної CTA-зони", "для маркетингового банера", "для темного інтерфейсу дашборда"],
};

const colorWords: Record<LocaleKey, Record<string, string>> = {
	ru: { rose: "розовый", mint: "мятный", blue: "синий", violet: "фиолетовый", green: "зелёный", gold: "золотой", cobalt: "кобальтовый", amber: "янтарный", ocean: "океанический", night: "ночной", peach: "персиковый", coral: "коралловый", lime: "лаймовый", teal: "бирюзовый", indigo: "индиго", berry: "ягодный", sunset: "закатный", arctic: "ледяной", sky: "небесный", ruby: "рубиновый", neon: "неоновый", smoke: "дымчатый", frost: "морозный", plum: "сливовый" },
	en: { rose: "rose", mint: "mint", blue: "blue", violet: "violet", green: "green", gold: "gold", cobalt: "cobalt", amber: "amber", ocean: "ocean", night: "night", peach: "peach", coral: "coral", lime: "lime", teal: "teal", indigo: "indigo", berry: "berry", sunset: "sunset", arctic: "arctic", sky: "sky", ruby: "ruby", neon: "neon", smoke: "smoky", frost: "frost", plum: "plum" },
	es: { rose: "rosa", mint: "menta", blue: "azul", violet: "violeta", green: "verde", gold: "dorado", cobalt: "cobalto", amber: "ambar", ocean: "oceano", night: "nocturno", peach: "durazno", coral: "coral", lime: "lima", teal: "turquesa", indigo: "indigo", berry: "frutos rojos", sunset: "atardecer", arctic: "artico", sky: "cielo", ruby: "rubi", neon: "neon", smoke: "ahumado", frost: "escarchado", plum: "ciruela" },
	zh: { rose: "玫瑰", mint: "薄荷", blue: "蓝", violet: "紫罗兰", green: "绿色", gold: "金色", cobalt: "钴蓝", amber: "琥珀", ocean: "海洋", night: "夜色", peach: "蜜桃", coral: "珊瑚", lime: "青柠", teal: "蓝绿", indigo: "靛蓝", berry: "莓果", sunset: "日落", arctic: "冰川", sky: "天空", ruby: "红宝石", neon: "霓虹", smoke: "烟雾", frost: "霜感", plum: "李子" },
	tt: { rose: "алсу", mint: "мәтрүшкә", blue: "зәңгәр", violet: "шәмәхә", green: "яшел", gold: "алтын", cobalt: "кобальт", amber: "кәрәбә", ocean: "океан", night: "төнге", peach: "шәфталу", coral: "коралл", lime: "лайм", teal: "фирүзә", indigo: "индиго", berry: "җиләк", sunset: "кояш баешы", arctic: "салкын", sky: "күк", ruby: "рубин", neon: "неон", smoke: "төтенле", frost: "бозлы", plum: "кара җимеш" },
	kk: { rose: "қызғылт", mint: "жалбыз", blue: "көк", violet: "күлгін", green: "жасыл", gold: "алтын", cobalt: "кобальт", amber: "кәріптас", ocean: "мұхит", night: "түнгі", peach: "шабдалы", coral: "маржан", lime: "лайм", teal: "көгілдір", indigo: "индиго", berry: "жидек", sunset: "күн батар", arctic: "мұзды", sky: "аспан", ruby: "рубин", neon: "неон", smoke: "түтінді", frost: "аязды", plum: "алхоры" },
	uk: { rose: "рожевий", mint: "м'ятний", blue: "синій", violet: "фіолетовий", green: "зелений", gold: "золотий", cobalt: "кобальтовий", amber: "бурштиновий", ocean: "океанічний", night: "нічний", peach: "персиковий", coral: "кораловий", lime: "лаймовий", teal: "бірюзовий", indigo: "індиго", berry: "ягідний", sunset: "західний", arctic: "крижаний", sky: "небесний", ruby: "рубіновий", neon: "неоновий", smoke: "димчастий", frost: "морозний", plum: "сливовий" },
};

function clamp(text: string, fallbackTail: string) {
	if (text.length < 20) return `${text} ${fallbackTail}`;
	if (text.length <= 110) return text;
	const cut = text.slice(0, 110);
	const lastSpace = cut.lastIndexOf(" ");
	return `${(lastSpace === -1 ? cut : cut.slice(0, Math.max(lastSpace, 20))).trimEnd()}.`;
}

function getColorTokens(name: string) {
	return name
		.split("-")
		.filter((part) => !skipTokens.has(part))
		.slice(0, 2);
}

function getTypeLabel(locale: LocaleKey, name: string) {
	if (name.startsWith("mesh-")) {
		if (locale === "ru") return "Сетчатый градиент";
		if (locale === "es") return "Gradiente de malla";
		if (locale === "zh") return "网格渐变";
		if (locale === "tt") return "Сетка градиенты";
		if (locale === "kk") return "Торлы градиент";
		if (locale === "uk") return "Сітчастий градієнт";
		return "Mesh gradient";
	}
	if (name.startsWith("glow-")) {
		if (locale === "ru") return "Светящийся градиент";
		if (locale === "es") return "Gradiente con glow";
		if (locale === "zh") return "发光渐变";
		if (locale === "tt") return "Ялтыраган градиент";
		if (locale === "kk") return "Жарқыраған градиент";
		if (locale === "uk") return "Світний градієнт";
		return "Glow gradient";
	}
	if (name.startsWith("linear-")) {
		if (locale === "ru") return "Линейный градиент";
		if (locale === "es") return "Gradiente lineal";
		if (locale === "zh") return "线性渐变";
		if (locale === "tt") return "Сызыклы градиент";
		if (locale === "kk") return "Сызықтық градиент";
		if (locale === "uk") return "Лінійний градієнт";
		return "Linear gradient";
	}
	if (name.startsWith("radial-")) {
		if (locale === "ru") return "Радиальный градиент";
		if (locale === "es") return "Gradiente radial";
		if (locale === "zh") return "径向渐变";
		if (locale === "tt") return "Радиаль градиент";
		if (locale === "kk") return "Радиалды градиент";
		if (locale === "uk") return "Радіальний градієнт";
		return "Radial gradient";
	}
	if (name.startsWith("conic-")) {
		if (locale === "ru") return "Конический градиент";
		if (locale === "es") return "Gradiente conico";
		if (locale === "zh") return "圆锥渐变";
		if (locale === "tt") return "Коник градиент";
		if (locale === "kk") return "Конус градиент";
		if (locale === "uk") return "Конічний градієнт";
		return "Conic gradient";
	}
	if (name.startsWith("repeating-")) {
		if (locale === "ru") return "Повторяющийся градиент";
		if (locale === "es") return "Gradiente repetido";
		if (locale === "zh") return "重复渐变";
		if (locale === "tt") return "Кабатлана торган градиент";
		if (locale === "kk") return "Қайталанатын градиент";
		if (locale === "uk") return "Повторюваний градієнт";
		return "Repeating gradient";
	}
	if (name.startsWith("multi-stop-")) {
		if (locale === "ru") return "Многоточечный градиент";
		if (locale === "es") return "Gradiente multi-stop";
		if (locale === "zh") return "多段渐变";
		if (locale === "tt") return "Күп нокталы градиент";
		if (locale === "kk") return "Көп аялдамалы градиент";
		if (locale === "uk") return "Багатоточковий градієнт";
		return "Multi-stop gradient";
	}
	if (name.startsWith("transparent-")) {
		if (locale === "ru") return "Полупрозрачный градиент";
		if (locale === "es") return "Gradiente semitransparente";
		if (locale === "zh") return "半透明渐变";
		if (locale === "tt") return "Ярым үтәкүренмәле градиент";
		if (locale === "kk") return "Жартылай мөлдір градиент";
		if (locale === "uk") return "Напівпрозорий градієнт";
		return "Semi-transparent gradient";
	}
	if (name.startsWith("border-")) {
		if (locale === "ru") return "Контурный градиент";
		if (locale === "es") return "Gradiente para borde";
		if (locale === "zh") return "边框渐变";
		if (locale === "tt") return "Контур градиенты";
		if (locale === "kk") return "Жиек градиенті";
		if (locale === "uk") return "Контурний градієнт";
		return "Border gradient";
	}
	if (name.startsWith("noise-")) {
		if (locale === "ru") return "Градиент с зерном";
		if (locale === "es") return "Gradiente con grano";
		if (locale === "zh") return "带噪点渐变";
		if (locale === "tt") return "Бөртекле градиент";
		if (locale === "kk") return "Дәнді градиент";
		if (locale === "uk") return "Градієнт із зерном";
		return "Grainy gradient";
	}
	if (name.startsWith("flag-")) {
		if (locale === "ru") return "Флаговый градиент";
		if (locale === "es") return "Gradiente de bandera";
		if (locale === "zh") return "旗帜风格渐变";
		if (locale === "tt") return "Флаг стилендәге градиент";
		if (locale === "kk") return "Ту стиліндегі градиент";
		if (locale === "uk") return "Прапоровий градієнт";
		return "Flag-inspired gradient";
	}
	if (name.startsWith("femme-")) {
		if (locale === "ru") return "Мягкий fashion-градиент";
		if (locale === "es") return "Gradiente fashion suave";
		if (locale === "zh") return "柔和时尚渐变";
		if (locale === "tt") return "Йомшак fashion-градиент";
		if (locale === "kk") return "Жұмсақ fashion-градиент";
		if (locale === "uk") return "М'який fashion-градієнт";
		return "Soft fashion gradient";
	}
	if (name.startsWith("masc-")) {
		if (locale === "ru") return "Контрастный industrial-градиент";
		if (locale === "es") return "Gradiente industrial contrastado";
		if (locale === "zh") return "硬朗工业风渐变";
		if (locale === "tt") return "Контраст industrial-градиент";
		if (locale === "kk") return "Контрастты industrial-градиент";
		if (locale === "uk") return "Контрастний industrial-градієнт";
		return "High-contrast industrial gradient";
	}
	if (locale === "ru") return "Градиент";
	if (locale === "es") return "Gradiente";
	if (locale === "zh") return "渐变";
	if (locale === "tt") return "Градиент";
	if (locale === "kk") return "Градиент";
	if (locale === "uk") return "Градієнт";
	return "Gradient";
}

function getPalette(locale: LocaleKey, name: string) {
	const tokens = getColorTokens(name);
	const dict = colorWords[locale];
	const translated = tokens.map((token) => dict[token]).filter(Boolean);
	if (!translated.length) {
		if (locale === "ru") return "нейтральная палитра";
		if (locale === "es") return "paleta neutra";
		if (locale === "zh") return "中性配色";
		if (locale === "tt") return "нейтраль палитра";
		if (locale === "kk") return "бейтарап палитра";
		if (locale === "uk") return "нейтральна палітра";
		return "neutral palette";
	}
	if (translated.length === 1) return translated[0];
	if (locale === "zh") return `${translated[0]} + ${translated[1]}`;
	return `${translated[0]} + ${translated[1]}`;
}

export function getDescription(locale: Locale, name: string, id: number) {
	const usage = usages[locale][(id * 3 + 1) % usages[locale].length];
	const type = getTypeLabel(locale, name);
	const palette = getPalette(locale, name);

	if (locale === "zh") return clamp(`${type}，主色是${palette}。${usage}。`, "现代风格");
	if (locale === "en") return clamp(`${type} with ${palette} palette, optimized ${usage}.`, "for modern UI");
	if (locale === "es") return clamp(`${type} con paleta ${palette}, optimizado ${usage}.`, "para interfaz moderna");
	if (locale === "tt") return clamp(`${type}: ${palette} палитрасы. ${usage}.`, "заманча стильдә");
	if (locale === "kk") return clamp(`${type}: ${palette} палитрасы. ${usage}.`, "заманауи стильде");
	if (locale === "uk") return clamp(`${type} з палітрою ${palette}. Найкраще працює ${usage}.`, "у сучасному стилі");
	return clamp(`${type} с палитрой ${palette}. Лучше всего работает ${usage}.`, "в современном стиле");
}

export function getLastUpdatedLabel(locale: Locale, lastUpdatedInput: string) {
	const lastUpdated = new Date(lastUpdatedInput);
	const fmt2 = (n: number) => String(n).padStart(2, "0");

	const ruMonths = ["янв.", "февр.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."];
	const ttMonths = ["гыйн.", "февр.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."];
	const kkMonths = ["қаң.", "ақп.", "наур.", "сәу.", "мам.", "маус.", "шіл.", "там.", "қыр.", "қаз.", "қар.", "жел."];
	const ukMonths = ["січ.", "лют.", "бер.", "квіт.", "трав.", "черв.", "лип.", "серп.", "вер.", "жовт.", "лист.", "груд."];

	if (locale === "ru") return `${fmt2(lastUpdated.getDate())} ${ruMonths[lastUpdated.getMonth()]} ${lastUpdated.getFullYear()} - ${fmt2(lastUpdated.getHours())}:${fmt2(lastUpdated.getMinutes())}`;
	if (locale === "tt") return `${fmt2(lastUpdated.getDate())} ${ttMonths[lastUpdated.getMonth()]} ${lastUpdated.getFullYear()} - ${fmt2(lastUpdated.getHours())}:${fmt2(lastUpdated.getMinutes())}`;
	if (locale === "kk") return `${fmt2(lastUpdated.getDate())} ${kkMonths[lastUpdated.getMonth()]} ${lastUpdated.getFullYear()} - ${fmt2(lastUpdated.getHours())}:${fmt2(lastUpdated.getMinutes())}`;
	if (locale === "uk") return `${fmt2(lastUpdated.getDate())} ${ukMonths[lastUpdated.getMonth()]} ${lastUpdated.getFullYear()} - ${fmt2(lastUpdated.getHours())}:${fmt2(lastUpdated.getMinutes())}`;
	if (locale === "es") return new Intl.DateTimeFormat("es-ES", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: false }).format(lastUpdated).replace(",", " -");
	if (locale === "zh") return new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false }).format(lastUpdated).replace(/\//g, "-");

	const enParts = new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	}).formatToParts(lastUpdated);
	const enGet = (type: string) => enParts.find((part) => part.type === type)?.value ?? "";
	return `${enGet("month")} ${enGet("day")}, ${enGet("year")} - ${enGet("hour")}:${enGet("minute")} ${enGet("dayPeriod")}`;
}
