<script lang="ts">
	import {
		BotIcon,
		Camera01Icon,
		CheckmarkCircle02Icon,
		Shield01Icon,
		UserIcon,
		UserGroupIcon,
	} from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/avatar";
	import type { AvatarPreviewVariant } from "./meta";

	let { variant = "default" }: { variant?: AvatarPreviewVariant } = $props();
</script>

{#if variant === "default"}
	<div class="flex items-center justify-center p-4">
		<Avatar>
			<AvatarImage
				src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
				alt="Jane Doe"
			/>
			<AvatarFallback>JD</AvatarFallback>
		</Avatar>
	</div>
{:else if variant === "sizes"}
	<div class="flex flex-wrap items-center justify-center gap-4 p-4">
		<Avatar class="size-6 text-xs">
			<AvatarImage
				src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
				alt="XS"
			/>
			<AvatarFallback>XS</AvatarFallback>
		</Avatar>
		<Avatar class="size-8 text-xs">
			<AvatarImage
				src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
				alt="SM"
			/>
			<AvatarFallback>SM</AvatarFallback>
		</Avatar>
		<Avatar class="size-10 text-sm">
			<AvatarImage
				src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
				alt="MD"
			/>
			<AvatarFallback>MD</AvatarFallback>
		</Avatar>
		<Avatar class="size-12 text-base">
			<AvatarImage
				src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
				alt="LG"
			/>
			<AvatarFallback>LG</AvatarFallback>
		</Avatar>
		<Avatar class="size-16 text-lg">
			<AvatarImage
				src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
				alt="XL"
			/>
			<AvatarFallback>XL</AvatarFallback>
		</Avatar>
		<Avatar class="size-20 text-xl">
			<AvatarImage
				src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
				alt="2XL"
			/>
			<AvatarFallback>2XL</AvatarFallback>
		</Avatar>
	</div>
{:else if variant === "shapes"}
	<div class="flex items-center justify-center gap-6 p-4">
		<Avatar class="size-12 rounded-full">
			<AvatarImage
				src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
				alt="Circle"
			/>
			<AvatarFallback class="rounded-full">CR</AvatarFallback>
		</Avatar>
		<Avatar class="size-12 rounded-xl">
			<AvatarImage
				src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
				alt="Rounded"
			/>
			<AvatarFallback class="rounded-xl">RD</AvatarFallback>
		</Avatar>
		<Avatar class="size-12 rounded-2xl">
			<AvatarImage
				src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
				alt="Squircle"
			/>
			<AvatarFallback class="rounded-2xl">SQ</AvatarFallback>
		</Avatar>
	</div>
{:else if variant === "status"}
	<div class="flex items-center justify-center gap-6 p-4">
		<div class="relative">
			<Avatar class="size-11">
				<AvatarImage
					src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
					alt="Online"
				/>
				<AvatarFallback>ON</AvatarFallback>
			</Avatar>
			<span class="absolute right-0 bottom-0 size-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-neutral-950"
			></span>
		</div>
		<div class="relative">
			<Avatar class="size-11">
				<AvatarImage
					src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
					alt="Busy"
				/>
				<AvatarFallback>BY</AvatarFallback>
			</Avatar>
			<span class="absolute right-0 bottom-0 size-3 rounded-full bg-red-500 ring-2 ring-white dark:ring-neutral-950"
			></span>
		</div>
		<div class="relative">
			<Avatar class="size-11">
				<AvatarImage
					src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
					alt="Away"
				/>
				<AvatarFallback>AW</AvatarFallback>
			</Avatar>
			<span class="absolute right-0 bottom-0 size-3 rounded-full bg-amber-500 ring-2 ring-white dark:ring-neutral-950"
			></span>
		</div>
		<div class="relative">
			<Avatar class="size-11">
				<AvatarImage
					src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
					alt="Offline"
				/>
				<AvatarFallback>OFF</AvatarFallback>
			</Avatar>
			<span class="absolute right-0 bottom-0 size-3 rounded-full bg-neutral-400 ring-2 ring-white dark:ring-neutral-950"
			></span>
		</div>
	</div>
{:else if variant === "group"}
	<div class="flex items-center justify-center p-4">
		<div class="flex items-center -space-x-3">
			<Avatar class="size-10 ring-2 ring-white dark:ring-neutral-950">
				<AvatarImage
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
					alt="User 1"
				/>
				<AvatarFallback>U1</AvatarFallback>
			</Avatar>
			<Avatar class="size-10 ring-2 ring-white dark:ring-neutral-950">
				<AvatarImage
					src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
					alt="User 2"
				/>
				<AvatarFallback>U2</AvatarFallback>
			</Avatar>
			<Avatar class="size-10 ring-2 ring-white dark:ring-neutral-950">
				<AvatarImage
					src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
					alt="User 3"
				/>
				<AvatarFallback>U3</AvatarFallback>
			</Avatar>
			<Avatar class="size-10 ring-2 ring-white dark:ring-neutral-950">
				<AvatarImage
					src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
					alt="User 4"
				/>
				<AvatarFallback>U4</AvatarFallback>
			</Avatar>
			<Avatar class="size-10 ring-2 ring-white dark:ring-neutral-950">
				<AvatarFallback class="bg-blue-600 text-xs font-semibold text-white dark:bg-blue-500">+8</AvatarFallback>
			</Avatar>
		</div>
	</div>
{:else if variant === "badge"}
	<div class="flex items-center justify-center gap-6 p-4">
		<div class="relative">
			<Avatar class="size-12">
				<AvatarImage
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
					alt="Notifications"
				/>
				<AvatarFallback>NT</AvatarFallback>
			</Avatar>
			<span
				class="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white ring-2 ring-white dark:bg-blue-500 dark:ring-neutral-950"
			>
				3
			</span>
		</div>
		<div class="relative">
			<Avatar class="size-12">
				<AvatarImage
					src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
					alt="Verified"
				/>
				<AvatarFallback>VF</AvatarFallback>
			</Avatar>
			<span
				class="absolute -right-1 -bottom-1 flex size-5 items-center justify-center rounded-full bg-white text-blue-600 shadow-xs dark:bg-neutral-950 dark:text-blue-400"
			>
				<HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} />
			</span>
		</div>
	</div>
{:else if variant === "icons"}
	<div class="flex items-center justify-center gap-4 p-4">
		<Avatar class="size-11">
			<AvatarFallback>
				<HugeiconsIcon icon={UserIcon} size={20} />
			</AvatarFallback>
		</Avatar>
		<Avatar class="size-11">
			<AvatarFallback class="bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">
				<HugeiconsIcon icon={UserGroupIcon} size={20} />
			</AvatarFallback>
		</Avatar>
		<Avatar class="size-11">
			<AvatarFallback class="bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
				<HugeiconsIcon icon={BotIcon} size={20} />
			</AvatarFallback>
		</Avatar>
		<Avatar class="size-11">
			<AvatarFallback class="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
				<HugeiconsIcon icon={Shield01Icon} size={20} />
			</AvatarFallback>
		</Avatar>
	</div>
{:else if variant === "gradient"}
	<div class="flex items-center justify-center gap-4 p-4">
		<Avatar class="size-12">
			<AvatarFallback class="bg-gradient-to-tr from-purple-600 to-pink-500 text-base font-bold text-white">
				AM
			</AvatarFallback>
		</Avatar>
		<Avatar class="size-12">
			<AvatarFallback class="bg-gradient-to-tr from-blue-600 to-cyan-400 text-base font-bold text-white">
				SK
			</AvatarFallback>
		</Avatar>
		<Avatar class="size-12">
			<AvatarFallback class="bg-gradient-to-tr from-amber-500 to-rose-500 text-base font-bold text-white">
				RK
			</AvatarFallback>
		</Avatar>
	</div>
{:else if variant === "interactive"}
	<div class="flex items-center justify-center p-4">
		<div class="group relative cursor-pointer">
			<Avatar
				class="size-16 ring-2 ring-transparent transition-all group-hover:ring-blue-500 group-hover:ring-offset-2 dark:group-hover:ring-offset-neutral-950"
			>
				<AvatarImage
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
					alt="Edit profile"
				/>
				<AvatarFallback>ED</AvatarFallback>
			</Avatar>
			<div
				class="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
			>
				<HugeiconsIcon icon={Camera01Icon} size={20} class="text-white" />
			</div>
		</div>
	</div>
{:else if variant === "user-card"}
	<div class="flex items-center justify-center p-4">
		<div
			class="flex items-center gap-3.5 rounded-2xl border border-neutral-200 bg-white p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
		>
			<Avatar class="size-11">
				<AvatarImage
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
					alt="Super User"
				/>
				<AvatarFallback>SC</AvatarFallback>
			</Avatar>
			<div class="flex flex-col">
				<div class="flex items-center gap-2">
					<span class="text-sm font-semibold text-neutral-900 dark:text-white">Super User</span>
					<span
						class="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-500/20 dark:text-blue-300"
					>
						Admin
					</span>
				</div>
				<span class="text-xs text-neutral-500 dark:text-neutral-400">user@polinema.ui</span>
			</div>
		</div>
	</div>
{/if}
