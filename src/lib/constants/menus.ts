import { Archive01Icon, CalendarCheck, Database01Icon, Factory01Icon, type HugeiconsIcon, LegalDocument01Icon } from "@hugeicons/core-free-icons";
import { Routes } from "$lib/constants/routes";

export interface Navigation {
	title: string;
	icon: typeof HugeiconsIcon;
	prefix: string;
	items: {
		title: string;
		url: string;
	}[];
}

/**
 * @constant
 * @description Generates the navigation menu.
 * @returns Object containing main menus and admin-specific menus.
 */
export const menus = () => {};