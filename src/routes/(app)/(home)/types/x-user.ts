/**
 * @description Represents a user on X (formerly Twitter).
 * @interface XUser
 * @property {string} id - The unique identifier for the user.
 * @property {string} name - The display name of the user.
 * @property {string} username - The username (handle) of the user.
 * @property {string} profile_image_url - The URL of the user's profile image.
 */
export interface XUser {
	id: string;
	name: string;
	username: string;
	profile_image_url: string;
}
