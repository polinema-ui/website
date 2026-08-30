import { BootstrapIcon, TailwindcssIcon } from "@hugeicons/core-free-icons";

export type Framework = {
	name: "Tailwind 4" | "Bootstrap 5";
	icon: typeof TailwindcssIcon | typeof BootstrapIcon;
	color: string;
};

export const frameworks: readonly Framework[] = [
	{ name: "Tailwind 4", icon: TailwindcssIcon, color: "#06b6d4" },
	{ name: "Bootstrap 5", icon: BootstrapIcon, color: "#7952b3" },
] as const;

class FrameworkState {
	selected = $state<Framework["name"]>("Tailwind 4");
}

export const frameworkState = new FrameworkState();
