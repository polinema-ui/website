import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { BUTTON_BASE, BUTTON_SIZES, BUTTON_VARIANTS } from "./meta";

const tsx = readFileSync(join(__dirname, "button.tsx"), "utf8");

function extractConstBlock(source: string, name: string): string {
	const pattern = new RegExp(`(?:const|let|var)\\s+${name}\\s*[:=][^=]*?=[\\s\\S]*?(\\{[\\s\\S]*?\\n\\});`);
	const match = source.match(pattern);
	if (!match) throw new Error(`Cannot find ${name} map in button.tsx`);
	return match[1];
}

function extractClasses(block: string, key: string): string {
	const pattern = new RegExp(`${key}:\\s*(?:"([^"]*)"|'([^']*)'|\`([^\`]*)\`)`);
	const match = block.match(pattern);
	if (!match) throw new Error(`Cannot find key "${key}" in button.tsx map`);
	return (match[1] ?? match[2] ?? match[3] ?? "").replace(/\s+/g, " ").trim();
}

describe("button registry mirror", () => {
	it("keeps meta.ts in sync with button.tsx class maps", () => {
		const base = tsx.match(/BASE_CLASSES\s*=\s*(?:"([^"]*)"|'([^']*)'|`([^`]*)`)/);
		if (!base) throw new Error("Cannot find BASE_CLASSES in button.tsx");
		const tsxBase = (base[1] ?? base[2] ?? base[3] ?? "").replace(/\s+/g, " ").trim();
		expect(BUTTON_BASE.replace(/\s+/g, " ").trim()).toBe(tsxBase);

		const tsxVariants = extractConstBlock(tsx, "VARIANT_CLASSES");
		for (const [variant, classes] of Object.entries(BUTTON_VARIANTS)) {
			expect(classes.replace(/\s+/g, " ").trim(), `variant "${variant}" drifted`).toBe(
				extractClasses(tsxVariants, variant),
			);
		}

		const tsxSizes = extractConstBlock(tsx, "SIZE_CLASSES");
		for (const [size, classes] of Object.entries(BUTTON_SIZES)) {
			expect(classes.replace(/\s+/g, " ").trim(), `size "${size}" drifted`).toBe(extractClasses(tsxSizes, size));
		}
	});
});
