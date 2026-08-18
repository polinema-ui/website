/**
 * @constant
 * @default "sidebar_state"
 * @description The name of the cookie used to store the sidebar state (open or closed).
 * @type {string}
 */
export const SIDEBAR_COOKIE_NAME = "sidebar_state";

/**
 * @constant
 * @default 604800
 * @description The maximum age of the sidebar state cookie in seconds (7 days).
 * @type {number}
 */
export const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

/**
 * @constant
 * @default "16rem"
 * @description The width of the sidebar when it is open.
 * @type {string}
 */
export const SIDEBAR_WIDTH = "16rem";

/**
 * @constant
 * @default "18rem"
 * @description The width of the sidebar on mobile devices when it is open.
 * @type {string}
 */
export const SIDEBAR_WIDTH_MOBILE = "18rem";

/**
 * @constant
 * @default "3rem"
 * @description The width of the sidebar when it is closed (showing only icons).
 * @type {string}
 */
export const SIDEBAR_WIDTH_ICON = "3rem";

/**
 * @constant
 * @default "b"
 * @description The keyboard shortcut key to toggle the sidebar (e.g., "b" for "sidebar").
 * @type {string}
 */
export const SIDEBAR_KEYBOARD_SHORTCUT = "b";
