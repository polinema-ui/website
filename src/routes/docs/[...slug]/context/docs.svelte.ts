import { PKG_MANAGERS } from "$lib/constants/pkg-managers";

export type PackageManagerId = (typeof PKG_MANAGERS)[number]["id"];

class DocsState {
	pkgManager = $state<PackageManagerId>(PKG_MANAGERS[0].id);

	get activeCmd(): string {
		return PKG_MANAGERS.find((pm) => pm.id === this.pkgManager)?.cmd ?? "";
	}
}

export const docsState = new DocsState();
