import type { Metrics } from "$routes/(app)/(home)/types/metrics";

/**
 * @constant
 * @description Metrics data for the home page, including accessible components, GitHub stargazers, community contributors, pre-built blocks & templates, and open source status.
 * @type {readonly Metrics[]}
 */
export const METRICS: readonly Metrics[] = [
	{
		label: "Accessible Components",
		mobileLabel: "Components",
		position: "featured",
		value: "40+",
	},
	{
		label: "GitHub Stargazers",
		mobileLabel: "GitHub Stars",
		position: "left",
		value: "1.2k+",
	},
	{
		label: "Community Contributors",
		mobileLabel: "Contributors",
		position: "right",
		value: "25+",
	},
	{
		label: "Pre-built Blocks & Templates",
		mobileLabel: "Blocks & Templates",
		position: "bottom-left",
		value: "15+",
	},
	{
		label: "Free & Pure Svelte 5",
		mobileLabel: "Open Source",
		position: "bottom-right",
		value: "100%",
	},
];
