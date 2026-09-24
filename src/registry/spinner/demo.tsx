import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

export function SpinnerDefault() {
	return <Spinner />;
}

export function SpinnerSizes() {
	return (
		<div className="flex flex-wrap items-center gap-6">
			<Spinner size="xs" />
			<Spinner size="sm" />
			<Spinner size="md" />
			<Spinner size="lg" />
			<Spinner size="xl" />
		</div>
	);
}

export function SpinnerColors() {
	return (
		<div className="flex flex-wrap items-center gap-6">
			<Spinner variant="default" />
			<Spinner variant="secondary" />
			<Spinner variant="success" />
			<Spinner variant="destructive" />
			<Spinner variant="warning" />
		</div>
	);
}

export function SpinnerButton() {
	return (
		<div className="flex flex-wrap items-center gap-3">
			<Button disabled className="gap-2">
				<Spinner size="sm" className="[--spinner-head:var(--color-white)] [--spinner-track:rgba(255,255,255,0.25)]" />
				Saving changes...
			</Button>
		</div>
	);
}

export function SpinnerLabel() {
	return (
		<div className="flex flex-col items-center justify-center gap-3">
			<Spinner size="lg" />
			<div className="text-center">
				<p className="text-sm font-medium text-neutral-900 dark:text-white">Loading data</p>
				<p className="text-xs text-neutral-500 dark:text-neutral-400">Please wait while we prepare your dashboard...</p>
			</div>
		</div>
	);
}

export function SpinnerCard() {
	return (
		<div className="flex h-44 w-full max-w-sm flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
			<Spinner size="md" />
			<p className="text-xs text-neutral-500 dark:text-neutral-400">Fetching scheduled reports...</p>
		</div>
	);
}

export function SpinnerInput() {
	return (
		<div className="relative w-full max-w-sm">
			<Input placeholder="Searching members..." className="pr-10" />
			<div className="absolute inset-y-0 right-3 flex items-center">
				<Spinner size="xs" variant="secondary" />
			</div>
		</div>
	);
}
