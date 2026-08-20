import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @description Combines class names and merges Tailwind CSS classes.
 * @param {...ClassValue[]} inputs - The class names to combine.
 * @returns {string} The combined and merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

/**
 * @description A utility type that removes the `child` property from a given type `T`.
 * @template T - The type from which to remove the `child` property.
 * @returns {WithoutChild<T>} A new type with the `child` property removed.
 */
export type WithoutChild<T> = T extends { child?: unknown } ? Omit<T, "child"> : T;

/**
 * @description A utility type that removes the `children` property from a given type `T`.
 * @template T - The type from which to remove the `children` property.
 * @returns {WithoutChildren<T>} A new type with the `children` property removed.
 */
export type WithoutChildren<T> = T extends { children?: unknown } ? Omit<T, "children"> : T;

/**
 * @description A utility type that removes both `child` and `children` properties from a given type `T`.
 * @template T - The type from which to remove `child` and `children` properties.
 * @returns {WithoutChildrenOrChild<T>} A new type with `child` and `children` properties removed.
 */
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;

/**
 * @description A utility type for components that can accept a reference to an HTML element.
 * @template T - The base type to extend.
 * @template U - The type of the HTML element reference, defaulting to `HTMLElement`.
 */
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
