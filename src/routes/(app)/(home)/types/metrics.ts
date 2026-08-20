/**
 * @description Defines the structure of the metrics data used in the home page,
 *              including accessible components, GitHub stargazers, community contributors,
 *              pre-built blocks & templates, and open source status.
 * @interface Metrics
 * @readonly
 * @type {Metrics}
 */
export interface Metrics {
	value: string;
	label: string;
	mobileLabel: string;
	position: "bottom-left" | "bottom-right" | "featured" | "left" | "right";
}
