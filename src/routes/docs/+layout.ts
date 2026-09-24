import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
	const modules = import.meta.glob("/src/docs/**/*.svx", { eager: true });
	const menus: { title: string; url: string; category: string; order?: number }[] = [];

	for (const path in modules) {
		const module = modules[path] as { metadata?: { title?: string; category?: string; order?: number } };
		const slug = path.replace("/src/docs/", "").replace(".svx", "");
		const segments = slug.split("/");

		const folderName = segments.length > 1 ? segments[0].replace(/-/g, " ") : "Getting Started";
		const fallbackCategory = folderName
			.split(" ")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");

		const title = module.metadata?.title || segments[segments.length - 1].replace(/-/g, " ");
		const category = module.metadata?.category || fallbackCategory;
		const order = module.metadata?.order ?? 99;

		menus.push({ title, url: `/docs/${slug}`, category, order });
	}

	return { menus };
};
