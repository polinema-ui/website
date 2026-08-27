export type Framework = "html" | "php" | "blade" | "react";

export interface FrameworkMetadata {
  /** The unique identifier for the framework */
	id: Framework;

  /** The display label for the framework */
	label: string;

  /** A brief description of the framework */
	description: string;

  /** The code snippet associated with the framework */
	code: string;
}