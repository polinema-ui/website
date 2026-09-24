import { Alert02Icon, Upload01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputBasic() {
	return <Input placeholder="Enter text..." />;
}

export function InputGrid() {
	return (
		<div className="grid w-full max-w-sm grid-cols-2 gap-3">
			<div>
				<label
					htmlFor="input-first-name"
					className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
				>
					First name
				</label>
				<Input id="input-first-name" placeholder="John" />
			</div>
			<div>
				<label
					htmlFor="input-last-name"
					className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
				>
					Last name
				</label>
				<Input id="input-last-name" placeholder="Doe" />
			</div>
		</div>
	);
}

export function InputDisabled() {
	return (
		<div className="w-full max-w-sm">
			<label
				htmlFor="input-disabled"
				className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
			>
				Email
			</label>
			<Input id="input-disabled" type="email" defaultValue="user@polinema.ui" disabled />
		</div>
	);
}

export function InputInvalid() {
	return (
		<div className="w-full max-w-sm">
			<label
				htmlFor="input-invalid"
				className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
			>
				Email
			</label>
			<Input id="input-invalid" type="email" defaultValue="not-an-email" invalid />
			<p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400">
				<HugeiconsIcon icon={Alert02Icon} size={14} />
				Please enter a valid email address.
			</p>
		</div>
	);
}
export function InputFile() {
	return (
		<div className="w-full max-w-sm">
			<label
				htmlFor="input-file"
				className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-neutral-300 bg-white px-4 py-8 text-center transition-colors hover:border-blue-600 hover:bg-neutral-50 dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
			>
				<HugeiconsIcon icon={Upload01Icon} size={20} className="text-neutral-400 dark:text-neutral-400" />
				<span className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
					Click to upload <span className="font-normal text-neutral-500">or drag and drop</span>
				</span>
				<span className="text-xs text-neutral-500">PNG or JPG up to 5MB.</span>
			</label>
			<Input id="input-file" type="file" className="sr-only" />
		</div>
	);
}

export function InputRequired() {
	return (
		<div className="w-full max-w-sm">
			<label
				htmlFor="input-required"
				className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
			>
				Email <span className="text-red-600 dark:text-red-400">*</span>
			</label>
			<Input id="input-required" type="email" placeholder="user@polinema.ui" required />
		</div>
	);
}

export function InputInline() {
	return (
		<div className="flex w-full max-w-sm gap-2">
			<Input id="input-newsletter" type="email" placeholder="Enter your email" />
			<Button className="shrink-0">Subscribe</Button>
		</div>
	);
}

export function InputForm() {
	return (
		<form className="w-full max-w-sm space-y-4" onSubmit={(e) => e.preventDefault()}>
			<div className="grid grid-cols-2 gap-3">
				<div>
					<label
						htmlFor="input-signup-first"
						className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
					>
						First name
					</label>
					<Input id="input-signup-first" placeholder="John" />
				</div>
				<div>
					<label
						htmlFor="input-signup-last"
						className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
					>
						Last name
					</label>
					<Input id="input-signup-last" placeholder="Doe" />
				</div>
			</div>
			<div>
				<label
					htmlFor="input-signup-email"
					className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
				>
					Email <span className="text-red-600 dark:text-red-400">*</span>
				</label>
				<Input id="input-signup-email" type="email" placeholder="user@polinema.ui" required />
			</div>
			<div>
				<label
					htmlFor="input-signup-phone"
					className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
				>
					Phone
				</label>
				<Input id="input-signup-phone" type="tel" placeholder="+62 812 3456 7890" />
			</div>
			<div>
				<label
					htmlFor="input-signup-address"
					className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
				>
					Address
				</label>
				<Input id="input-signup-address" placeholder="Jl. Soekarno Hatta No. 9" />
			</div>
			<Button type="submit" className="w-full">
				Sign up
			</Button>
		</form>
	);
}
