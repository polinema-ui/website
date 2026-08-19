import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
	const rawMenus = import.meta.glob(["/src/docs/**/*.{md,svx}"], { eager: true });

	const menus = Object.entries(rawMenus).map(([path]) => {
		const url = path.replace("/src/docs", "/docs").replace(/\.(md|svx)$/, "");
		const parts = path.replace("/src/docs/", "").split("/");
		const category = parts.length > 1 ? parts[0] : "Umum";
		const title =
			parts
				.pop()
				?.replace(/\.(md|svx)$/, "")
				.replace(/-/g, " ") || "Tanpa Judul";

		return { url, title, category };
	});

	return { menus };
};
