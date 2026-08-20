import { ROUTES } from "$lib/constants/routes";

/**
 * @description Defines the navigation menu items for the website.
 * @type {Array<{ label: string; href: string }>}
 */
export const MENUS = [
	{ label: "Home", href: ROUTES.HOME },
	{ label: "Features", href: ROUTES.FEATURES },
	{ label: "About", href: ROUTES.ABOUT },
	{ label: "FAQ", href: ROUTES.FAQ },
	{ label: "Docs", href: ROUTES.DOCS },
] as const satisfies readonly {
	label: string;
	href: string;
}[];
