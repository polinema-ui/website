/**
 * @description Represents a testimonial with a name, role, and message.
 * @interface Testimonials
 */
export interface Testimonial {
	name: string;
	handle: string;
	avatar: string;
	content: string;
	url?: string;
}
