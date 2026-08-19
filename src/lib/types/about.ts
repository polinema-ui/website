export type MetricVariant = "featured" | "left" | "right" | "bottom-left" | "bottom-right";

export interface Metric {
	value: string;
	label: string;
	variant: MetricVariant;
	mobileLabel: string;
}

export type PositionedMetric = Omit<Metric, "variant"> & {
	variant: Exclude<MetricVariant, "featured">;
};
