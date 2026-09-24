import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { SPINNER_BASE, SPINNER_SIZES, SPINNER_VARIANTS } from "./meta";

const tsx = readFileSync(join(__dirname, "spinner.tsx"), "utf8");

function extractString(source: string, name: string): string {
	const pattern = new RegExp(`${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\`([^\`]*)\`)`);
	const match = source.match(pattern);
	if (!match) throw new Error(`Cannot find ${name} in spinner.tsx`);
	return (match[1] ?? match[2] ?? match[3] ?? "").replace(/\s+/g, " ").trim();
}

function extractConstBlock(source: string, name: string): string {
	const pattern = new RegExp(`(?:const|let|var)\\s+${name}\\s*[:=][^=]*?=[\\s\\S]*?(\\{[\\s\\S]*?\\n\\});`);
	const match = source.match(pattern);
	if (!match) throw new Error(`Cannot find ${name} map in spinner.tsx`);
	return match[1];
}

function extractClasses(block: string, key: string): string {
	const pattern = new RegExp(`${key}:\\s*(?:"([^"]*)"|'([^']*)'|\`([^\`]*)\`)`);
	const match = block.match(pattern);
	if (!match) throw new Error(`Cannot find key "${key}" in spinner.tsx map`);
	return (match[1] ?? match[2] ?? match[3] ?? "").replace(/\s+/g, " ").trim();
}

describe("spinner registry mirror", () => {
	it("keeps meta.ts in sync with spinner.tsx class maps", () => {
		expect(SPINNER_BASE.replace(/\s+/g, " ").trim()).toBe(extractString(tsx, "SPINNER_BASE"));

		const tsxSizes = extractConstBlock(tsx, "SPINNER_SIZES");
		for (const [size, classes] of Object.entries(SPINNER_SIZES)) {
			expect(classes.replace(/\s+/g, " ").trim(), `size "${size}" drifted`).toBe(extractClasses(tsxSizes, size));
		}

		const tsxVariants = extractConstBlock(tsx, "SPINNER_VARIANTS");
		for (const [variant, classes] of Object.entries(SPINNER_VARIANTS)) {
			expect(classes.replace(/\s+/g, " ").trim(), `variant "${variant}" drifted`).toBe(
				extractClasses(tsxVariants, variant),
			);
		}
	});
});
