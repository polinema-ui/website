import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { INPUT_CLASSES } from "./meta";

const tsx = readFileSync(join(__dirname, "input.tsx"), "utf8");

function extractClasses(source: string, name: string): string {
	const pattern = new RegExp(`${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\`([^\`]*)\`)`);
	const match = source.match(pattern);
	if (!match) throw new Error(`Cannot find ${name} in input.tsx`);
	return (match[1] ?? match[2] ?? match[3] ?? "").replace(/\s+/g, " ").trim();
}

describe("input registry mirror", () => {
	it("keeps meta.ts in sync with input.tsx class maps", () => {
		expect(INPUT_CLASSES.replace(/\s+/g, " ").trim(), "INPUT_CLASSES drifted").toBe(
			extractClasses(tsx, "INPUT_CLASSES"),
		);
	});
});
