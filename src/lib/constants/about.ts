import type { Metric, PositionedMetric } from "$lib/types/about";

export const FEATURED_METRIC: Metric = {
	value: "30,000+",
	label: "Employees Managed",
	variant: "featured",
	mobileLabel: "Employees Managed",
};

export const METRICS: PositionedMetric[] = [
	{
		value: "99.9%",
		label: "System Uptime Guarantee",
		variant: "left",
		mobileLabel: "System Uptime",
	},
	{
		value: "67%",
		label: "Customer Satisfaction",
		variant: "right",
		mobileLabel: "Customer Sat.",
	},
	{
		value: "12,000+",
		label: "Active Users Worldwide",
		variant: "bottom-left",
		mobileLabel: "Active Users",
	},
	{
		value: "24M+",
		label: "Customer Interactions",
		variant: "bottom-right",
		mobileLabel: "Interactions",
	},
];

export const POSITION_CLASSES: Record<PositionedMetric["variant"], string> = {
	left: "about-metric-left",
	right: "about-metric-right",
	"bottom-left": "about-metric-bottom-left",
	"bottom-right": "about-metric-bottom-right",
};
