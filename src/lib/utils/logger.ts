type LogContext = Record<string, unknown> | unknown[];

/**
 * Formats a log entry following Laravel/Monolog LineFormatter standards.
 * Format: `[YYYY-MM-DD HH:mm:ss] environment.LEVEL: Message {context}`
 */
function format(level: "DEBUG" | "INFO" | "WARNING" | "ERROR", message: string, context?: LogContext): string {
	const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);
	const env =
		(typeof process !== "undefined" && process.env?.PUBLIC_NODE_ENV) ||
		(typeof process !== "undefined" && process.env?.NODE_ENV) ||
		"local";
	const payload =
		context && (Array.isArray(context) ? context.length > 0 : Object.keys(context).length > 0)
			? ` ${JSON.stringify(context)}`
			: "";

	return `[${timestamp}] ${env}.${level}: ${message}${payload}`;
}

/**
 * @description Centralized logging utility mimicking Laravel Monolog format.
 * @type {Object} logger - Provides methods for logging at different levels: debug, info, warn, and error.
 * @example
 * ```javascript
 * logger.info("User logged in", { userId: 123 });
 * logger.error("Database connection failed", { error: err.message });
 * ```
 */
export const logger = {
	/**
	 * Logs detailed debug information.
	 * @example logger.debug("User payload received", { id: 1 });
	 */
	debug: (message: string, context?: LogContext) => console.debug(format("DEBUG", message, context)),

	/**
	 * Logs general operational events.
	 * @example logger.info("Pencadangan basis data berhasil");
	 */
	info: (message: string, context?: LogContext) => console.log(format("INFO", message, context)),

	/**
	 * Logs non-critical exceptional occurrences.
	 * @example logger.warn("Antrean offline mendekati kapasitas", { count: 85 });
	 */
	warn: (message: string, context?: LogContext) => console.warn(format("WARNING", message, context)),

	/**
	 * Logs runtime errors or failed database transactions.
	 * @example logger.error("Pencadangan gagal", { error: err.message });
	 */
	error: (message: string, context?: LogContext) => console.error(format("ERROR", message, context)),
} as const;
