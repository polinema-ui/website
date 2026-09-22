/// <reference types="vite/client" />

declare module "*.html?raw" {
	const content: string;
	export default content;
}
declare module "*.php?raw" {
	const content: string;
	export default content;
}
declare module "*.blade.php?raw" {
	const content: string;
	export default content;
}
declare module "*?raw" {
	const content: string;
	export default content;
}

declare global {
	namespace App {
		interface Error {
			/** A short description of the error */
			description?: string;
		}

		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
