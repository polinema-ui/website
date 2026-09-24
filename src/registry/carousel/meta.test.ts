import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
	CAROUSEL_BASE,
	CAROUSEL_CONTENT_BASE,
	CAROUSEL_ITEM_BASE,
	CAROUSEL_NEXT_BASE,
	CAROUSEL_PREVIOUS_BASE,
} from "./meta";

const tsx = readFileSync(join(__dirname, "carousel.tsx"), "utf8");

function extractClasses(source: string, name: string): string {
	const pattern = new RegExp(`${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\`([^\`]*)\`)`);
	const match = source.match(pattern);
	if (!match) throw new Error(`Cannot find ${name} in carousel.tsx`);
	return (match[1] ?? match[2] ?? match[3] ?? "").replace(/\s+/g, " ").trim();
}

describe("carousel registry mirror", () => {
	it("keeps meta.ts in sync with carousel.tsx class constants", () => {
		expect(CAROUSEL_BASE.replace(/\s+/g, " ").trim(), "CAROUSEL_BASE drifted").toBe(
			extractClasses(tsx, "CAROUSEL_BASE"),
		);
		expect(CAROUSEL_CONTENT_BASE.replace(/\s+/g, " ").trim(), "CAROUSEL_CONTENT_BASE drifted").toBe(
			extractClasses(tsx, "CAROUSEL_CONTENT_BASE"),
		);
		expect(CAROUSEL_ITEM_BASE.replace(/\s+/g, " ").trim(), "CAROUSEL_ITEM_BASE drifted").toBe(
			extractClasses(tsx, "CAROUSEL_ITEM_BASE"),
		);
		expect(CAROUSEL_PREVIOUS_BASE.replace(/\s+/g, " ").trim(), "CAROUSEL_PREVIOUS_BASE drifted").toBe(
			extractClasses(tsx, "CAROUSEL_PREVIOUS_BASE"),
		);
		expect(CAROUSEL_NEXT_BASE.replace(/\s+/g, " ").trim(), "CAROUSEL_NEXT_BASE drifted").toBe(
			extractClasses(tsx, "CAROUSEL_NEXT_BASE"),
		);
	});
});
