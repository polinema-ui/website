import {
	BotIcon,
	Camera01Icon,
	CheckmarkCircle02Icon,
	Shield01Icon,
	UserIcon,
	UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDefault() {
	return (
		<Avatar>
			<AvatarImage
				src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
				alt="Jane Doe"
			/>
			<AvatarFallback>JD</AvatarFallback>
		</Avatar>
	);
}

export function AvatarSizes() {
	return (
		<div className="flex flex-wrap items-center gap-4">
			<Avatar className="size-6 text-xs">
				<AvatarImage
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
					alt="XS"
				/>
				<AvatarFallback>XS</AvatarFallback>
			</Avatar>
			<Avatar className="size-8 text-xs">
				<AvatarImage
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
					alt="SM"
				/>
				<AvatarFallback>SM</AvatarFallback>
			</Avatar>
			<Avatar className="size-10 text-sm">
				<AvatarImage
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
					alt="MD"
				/>
				<AvatarFallback>MD</AvatarFallback>
			</Avatar>
			<Avatar className="size-12 text-base">
				<AvatarImage
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
					alt="LG"
				/>
				<AvatarFallback>LG</AvatarFallback>
			</Avatar>
			<Avatar className="size-16 text-lg">
				<AvatarImage
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
					alt="XL"
				/>
				<AvatarFallback>XL</AvatarFallback>
			</Avatar>
			<Avatar className="size-20 text-xl">
				<AvatarImage
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
					alt="2XL"
				/>
				<AvatarFallback>2XL</AvatarFallback>
			</Avatar>
		</div>
	);
}

export function AvatarShapes() {
	return (
		<div className="flex items-center gap-6">
			<Avatar className="size-12 rounded-full">
				<AvatarImage
					src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
					alt="Circle"
				/>
				<AvatarFallback className="rounded-full">CR</AvatarFallback>
			</Avatar>
			<Avatar className="size-12 rounded-xl">
				<AvatarImage
					src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
					alt="Rounded"
				/>
				<AvatarFallback className="rounded-xl">RD</AvatarFallback>
			</Avatar>
			<Avatar className="size-12 rounded-2xl">
				<AvatarImage
					src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
					alt="Squircle"
				/>
				<AvatarFallback className="rounded-2xl">SQ</AvatarFallback>
			</Avatar>
		</div>
	);
}

export function AvatarStatus() {
	return (
		<div className="flex items-center gap-6">
			<div className="relative">
				<Avatar className="size-11">
					<AvatarImage
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
						alt="Online"
					/>
					<AvatarFallback>ON</AvatarFallback>
				</Avatar>
				<span className="absolute right-0 bottom-0 size-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-neutral-950" />
			</div>
			<div className="relative">
				<Avatar className="size-11">
					<AvatarImage
						src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
						alt="Busy"
					/>
					<AvatarFallback>BY</AvatarFallback>
				</Avatar>
				<span className="absolute right-0 bottom-0 size-3 rounded-full bg-red-500 ring-2 ring-white dark:ring-neutral-950" />
			</div>
			<div className="relative">
				<Avatar className="size-11">
					<AvatarImage
						src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
						alt="Away"
					/>
					<AvatarFallback>AW</AvatarFallback>
				</Avatar>
				<span className="absolute right-0 bottom-0 size-3 rounded-full bg-amber-500 ring-2 ring-white dark:ring-neutral-950" />
			</div>
			<div className="relative">
				<Avatar className="size-11">
					<AvatarImage
						src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
						alt="Offline"
					/>
					<AvatarFallback>OFF</AvatarFallback>
				</Avatar>
				<span className="absolute right-0 bottom-0 size-3 rounded-full bg-neutral-400 ring-2 ring-white dark:ring-neutral-950" />
			</div>
		</div>
	);
}

export function AvatarGroup() {
	return (
		<div className="flex items-center -space-x-3">
			<Avatar className="size-10 ring-2 ring-white dark:ring-neutral-950">
				<AvatarImage
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
					alt="User 1"
				/>
				<AvatarFallback>U1</AvatarFallback>
			</Avatar>
			<Avatar className="size-10 ring-2 ring-white dark:ring-neutral-950">
				<AvatarImage
					src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
					alt="User 2"
				/>
				<AvatarFallback>U2</AvatarFallback>
			</Avatar>
			<Avatar className="size-10 ring-2 ring-white dark:ring-neutral-950">
				<AvatarImage
					src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
					alt="User 3"
				/>
				<AvatarFallback>U3</AvatarFallback>
			</Avatar>
			<Avatar className="size-10 ring-2 ring-white dark:ring-neutral-950">
				<AvatarImage
					src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
					alt="User 4"
				/>
				<AvatarFallback>U4</AvatarFallback>
			</Avatar>
			<Avatar className="size-10 ring-2 ring-white dark:ring-neutral-950">
				<AvatarFallback className="bg-blue-600 text-xs font-semibold text-white dark:bg-blue-500">+8</AvatarFallback>
			</Avatar>
		</div>
	);
}

export function AvatarBadge() {
	return (
		<div className="flex items-center gap-6">
			<div className="relative">
				<Avatar className="size-12">
					<AvatarImage
						src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
						alt="Notifications"
					/>
					<AvatarFallback>NT</AvatarFallback>
				</Avatar>
				<span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white ring-2 ring-white dark:bg-blue-500 dark:ring-neutral-950">
					3
				</span>
			</div>
			<div className="relative">
				<Avatar className="size-12">
					<AvatarImage
						src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
						alt="Verified"
					/>
					<AvatarFallback>VF</AvatarFallback>
				</Avatar>
				<span className="absolute -right-1 -bottom-1 flex size-5 items-center justify-center rounded-full bg-white text-blue-600 shadow-xs dark:bg-neutral-950 dark:text-blue-400">
					<HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} />
				</span>
			</div>
		</div>
	);
}

export function AvatarIconFallback() {
	return (
		<div className="flex items-center gap-4">
			<Avatar className="size-11">
				<AvatarFallback>
					<HugeiconsIcon icon={UserIcon} size={20} />
				</AvatarFallback>
			</Avatar>
			<Avatar className="size-11">
				<AvatarFallback className="bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">
					<HugeiconsIcon icon={UserGroupIcon} size={20} />
				</AvatarFallback>
			</Avatar>
			<Avatar className="size-11">
				<AvatarFallback className="bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
					<HugeiconsIcon icon={BotIcon} size={20} />
				</AvatarFallback>
			</Avatar>
			<Avatar className="size-11">
				<AvatarFallback className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
					<HugeiconsIcon icon={Shield01Icon} size={20} />
				</AvatarFallback>
			</Avatar>
		</div>
	);
}

export function AvatarGradient() {
	return (
		<div className="flex items-center gap-4">
			<Avatar className="size-12">
				<AvatarFallback className="bg-linear-to-tr from-purple-600 to-pink-500 text-base font-bold text-white">
					AM
				</AvatarFallback>
			</Avatar>
			<Avatar className="size-12">
				<AvatarFallback className="bg-linear-to-tr from-blue-600 to-cyan-400 text-base font-bold text-white">
					SK
				</AvatarFallback>
			</Avatar>
			<Avatar className="size-12">
				<AvatarFallback className="bg-linear-to-tr from-amber-500 to-rose-500 text-base font-bold text-white">
					RK
				</AvatarFallback>
			</Avatar>
		</div>
	);
}

export function AvatarInteractive() {
	return (
		<div className="group relative cursor-pointer">
			<Avatar className="size-16 ring-2 ring-transparent transition-all group-hover:ring-blue-500 group-hover:ring-offset-2 dark:group-hover:ring-offset-neutral-950">
				<AvatarImage
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
					alt="Edit profile"
				/>
				<AvatarFallback>ED</AvatarFallback>
			</Avatar>
			<div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
				<HugeiconsIcon icon={Camera01Icon} size={20} className="text-white" />
			</div>
		</div>
	);
}

export function AvatarUserCard() {
	return (
		<div className="flex items-center gap-3.5 rounded-2xl border border-neutral-200 bg-white p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
			<Avatar className="size-11">
				<AvatarImage
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
					alt="Super User"
				/>
				<AvatarFallback>SC</AvatarFallback>
			</Avatar>
			<div className="flex flex-col">
				<div className="flex items-center gap-2">
					<span className="text-sm font-semibold text-neutral-900 dark:text-white">Super User</span>
					<span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
						Admin
					</span>
				</div>
				<span className="text-xs text-neutral-500 dark:text-neutral-400">user@polinema.ui</span>
			</div>
		</div>
	);
}
