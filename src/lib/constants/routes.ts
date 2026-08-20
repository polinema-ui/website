/**
 * @constant
 * @description Contains the routes used in the application.
 *
 * @example
 * ```ts
 * import { Routes } from "$lib/constants/routes";
 * console.log(Routes.HOME); // Output: "/"
 * ```
 */
export const ROUTES = {
	ABOUT: "/about",
	DOCS: "/docs/getting-started/introduction",
	FAQ: "/faq",
	FEATURES: "/features",
	HOME: "/",
} as const;
