import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
	DIALOG_CONTENT_BASE,
	DIALOG_DESCRIPTION_BASE,
	DIALOG_FOOTER_BASE,
	DIALOG_HEADER_BASE,
	DIALOG_OVERLAY_BASE,
	DIALOG_TITLE_BASE,
} from "./meta";

const tsx = readFileSync(join(__dirname, "dialog.tsx"), "utf8");

function extractClasses(source: string, name: string): string {
	const pattern = new RegExp(`${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\`([^\`]*)\`)`);
	const match = source.match(pattern);
	if (!match) throw new Error(`Cannot find ${name} in dialog.tsx`);
	return (match[1] ?? match[2] ?? match[3] ?? "").replace(/\s+/g, " ").trim();
}

describe("dialog registry mirror", () => {
	it("keeps meta.ts in sync with dialog.tsx class constants", () => {
		expect(DIALOG_OVERLAY_BASE.replace(/\s+/g, " ").trim(), "DIALOG_OVERLAY_BASE drifted").toBe(
			extractClasses(tsx, "DIALOG_OVERLAY_BASE"),
		);
		expect(DIALOG_CONTENT_BASE.replace(/\s+/g, " ").trim(), "DIALOG_CONTENT_BASE drifted").toBe(
			extractClasses(tsx, "DIALOG_CONTENT_BASE"),
		);
		expect(DIALOG_HEADER_BASE.replace(/\s+/g, " ").trim(), "DIALOG_HEADER_BASE drifted").toBe(
			extractClasses(tsx, "DIALOG_HEADER_BASE"),
		);
		expect(DIALOG_FOOTER_BASE.replace(/\s+/g, " ").trim(), "DIALOG_FOOTER_BASE drifted").toBe(
			extractClasses(tsx, "DIALOG_FOOTER_BASE"),
		);
		expect(DIALOG_TITLE_BASE.replace(/\s+/g, " ").trim(), "DIALOG_TITLE_BASE drifted").toBe(
			extractClasses(tsx, "DIALOG_TITLE_BASE"),
		);
		expect(DIALOG_DESCRIPTION_BASE.replace(/\s+/g, " ").trim(), "DIALOG_DESCRIPTION_BASE drifted").toBe(
			extractClasses(tsx, "DIALOG_DESCRIPTION_BASE"),
		);
	});
});
