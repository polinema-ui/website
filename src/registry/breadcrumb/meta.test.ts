import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
	BREADCRUMB_BASE,
	BREADCRUMB_ELLIPSIS_BASE,
	BREADCRUMB_ITEM_BASE,
	BREADCRUMB_LINK_BASE,
	BREADCRUMB_LIST_BASE,
	BREADCRUMB_PAGE_BASE,
	BREADCRUMB_SEPARATOR_BASE,
} from "./meta";

const tsx = readFileSync(join(__dirname, "breadcrumb.tsx"), "utf8");

function extractClasses(source: string, name: string): string {
	const pattern = new RegExp(`${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\`([^\`]*)\`)`);
	const match = source.match(pattern);
	if (!match) throw new Error(`Cannot find ${name} in breadcrumb.tsx`);
	return (match[1] ?? match[2] ?? match[3] ?? "").replace(/\s+/g, " ").trim();
}

describe("breadcrumb registry mirror", () => {
	it("keeps meta.ts in sync with breadcrumb.tsx class constants", () => {
		expect(BREADCRUMB_BASE.replace(/\s+/g, " ").trim(), "BREADCRUMB_BASE drifted").toBe(
			extractClasses(tsx, "BREADCRUMB_BASE"),
		);
		expect(BREADCRUMB_LIST_BASE.replace(/\s+/g, " ").trim(), "BREADCRUMB_LIST_BASE drifted").toBe(
			extractClasses(tsx, "BREADCRUMB_LIST_BASE"),
		);
		expect(BREADCRUMB_ITEM_BASE.replace(/\s+/g, " ").trim(), "BREADCRUMB_ITEM_BASE drifted").toBe(
			extractClasses(tsx, "BREADCRUMB_ITEM_BASE"),
		);
		expect(BREADCRUMB_LINK_BASE.replace(/\s+/g, " ").trim(), "BREADCRUMB_LINK_BASE drifted").toBe(
			extractClasses(tsx, "BREADCRUMB_LINK_BASE"),
		);
		expect(BREADCRUMB_PAGE_BASE.replace(/\s+/g, " ").trim(), "BREADCRUMB_PAGE_BASE drifted").toBe(
			extractClasses(tsx, "BREADCRUMB_PAGE_BASE"),
		);
		expect(BREADCRUMB_SEPARATOR_BASE.replace(/\s+/g, " ").trim(), "BREADCRUMB_SEPARATOR_BASE drifted").toBe(
			extractClasses(tsx, "BREADCRUMB_SEPARATOR_BASE"),
		);
		expect(BREADCRUMB_ELLIPSIS_BASE.replace(/\s+/g, " ").trim(), "BREADCRUMB_ELLIPSIS_BASE drifted").toBe(
			extractClasses(tsx, "BREADCRUMB_ELLIPSIS_BASE"),
		);
	});
});
