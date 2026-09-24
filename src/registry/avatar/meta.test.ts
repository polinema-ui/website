import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { AVATAR_BASE, AVATAR_FALLBACK_BASE, AVATAR_IMAGE_BASE } from "./meta";

const tsx = readFileSync(join(__dirname, "avatar.tsx"), "utf8");

function extractClasses(source: string, name: string): string {
	const pattern = new RegExp(`${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\`([^\`]*)\`)`);
	const match = source.match(pattern);
	if (!match) throw new Error(`Cannot find ${name} in avatar.tsx`);
	return (match[1] ?? match[2] ?? match[3] ?? "").replace(/\s+/g, " ").trim();
}

describe("avatar registry mirror", () => {
	it("keeps meta.ts in sync with avatar.tsx class constants", () => {
		expect(AVATAR_BASE.replace(/\s+/g, " ").trim(), "AVATAR_BASE drifted").toBe(extractClasses(tsx, "AVATAR_BASE"));
		expect(AVATAR_IMAGE_BASE.replace(/\s+/g, " ").trim(), "AVATAR_IMAGE_BASE drifted").toBe(
			extractClasses(tsx, "AVATAR_IMAGE_BASE"),
		);
		expect(AVATAR_FALLBACK_BASE.replace(/\s+/g, " ").trim(), "AVATAR_FALLBACK_BASE drifted").toBe(
			extractClasses(tsx, "AVATAR_FALLBACK_BASE"),
		);
	});
});
