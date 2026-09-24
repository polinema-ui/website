import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { TEXTAREA_CLASSES } from "./meta";

const tsx = readFileSync(join(__dirname, "textarea.tsx"), "utf8");

function extractClasses(source: string, name: string): string {
	const pattern = new RegExp(`${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\`([^\`]*)\`)`);
	const match = source.match(pattern);
	if (!match) throw new Error(`Cannot find ${name} in textarea.tsx`);
	return (match[1] ?? match[2] ?? match[3] ?? "").replace(/\s+/g, " ").trim();
}

describe("textarea registry mirror", () => {
	it("keeps meta.ts in sync with textarea.tsx class maps", () => {
		expect(TEXTAREA_CLASSES.replace(/\s+/g, " ").trim(), "TEXTAREA_CLASSES drifted").toBe(
			extractClasses(tsx, "TEXTAREA_CLASSES"),
		);
	});
});
