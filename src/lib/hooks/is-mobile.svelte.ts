import { MediaQuery } from "svelte/reactivity";

/**
 * @constant {number}
 * @description The default breakpoint (in pixels) used to determine if the viewport is considered mobile. This value is set to 768px, which is a common threshold for mobile devices.
 */
const DEFAULT_MOBILE_BREAKPOINT = 768;

/**
 * @class
 * @description A reactive store that indicates whether the current viewport width is considered mobile based on a specified breakpoint.
 * @extends {MediaQuery}
 * @param {number} [breakpoint=DEFAULT_MOBILE_BREAKPOINT] - The maximum width (in pixels) to consider as mobile. Defaults to 768px.
 */
export class IsMobile extends MediaQuery {
	constructor(breakpoint: number = DEFAULT_MOBILE_BREAKPOINT) {
		super(`max-width: ${breakpoint - 1}px`);
	}
}
