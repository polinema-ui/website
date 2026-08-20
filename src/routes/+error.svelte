<script lang="ts">
	import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { page } from "$app/state";
	import { Button } from "$lib/components/button";
	import { ROUTES } from "$lib/constants/routes";
</script>

<svelte:head>
	<title>{page.status} | Polinema UI</title>
</svelte:head>

<main
	class="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[linear-gradient(180deg,rgba(253,253,252,1)_0%,rgba(244,246,242,1)_100%)] px-4 py-16 text-center"
>
	<figure
		class="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-96 w-full mask-[linear-gradient(180deg,transparent_0%,black_30%,black_85%,transparent_100%)] bg-cover bg-position-[center_top] opacity-40 sm:h-120 sm:opacity-50"
		style="background-image: url('/elon-musk-migren.webp')"
	></figure>
	<div
		class="pointer-events-none absolute inset-x-0 top-0 z-1 h-full w-full bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.5)_65%,transparent_100%)]"
	></div>
	<section class="relative z-10 flex flex-col items-center gap-6">
		<a
			href={ROUTES.HOME}
			class="flex shrink-0 items-center transition-transform duration-200 hover:scale-105 active:scale-95"
		>
			<img src="/logo.png" alt="Polinema UI Logo" class="h-6 w-auto object-contain" />
		</a>
		<div class="relative flex flex-col items-center">
			<span class="font-sans text-8xl font-black tracking-tighter text-black/5 select-none sm:text-9xl md:text-[140px]">
				{page.status}
			</span>
			<h1 class="-mt-12 font-sans text-2xl font-bold tracking-tight text-neutral-900 sm:-mt-16 sm:text-4xl md:text-5xl">
				{#if page.status === 404}
					Halaman <span class="bg-linear-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
						Tidak Ditemukan
					</span>
				{:else if page.status === 401}
					Akses <span class="bg-linear-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
						Ditolak
					</span>
				{:else}
					Terjadi <span class="bg-linear-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
						Kesalahan
					</span>
				{/if}
			</h1>
		</div>
		<p class="max-w-md font-sans text-sm leading-relaxed font-normal text-balance text-neutral-600 sm:text-base">
			{#if page.status === 404}
				Oops! Halaman yang kamu cari sepertinya tidak ada, telah dipindahkan, atau kamu salah mengetikkan URL.
			{:else}
				{page.error?.message || "Terjadi kendala pada sistem. Silakan coba beberapa saat lagi."}
			{/if}
		</p>
		<Button
			href={ROUTES.HOME}
			class="group relative mt-2 flex h-auto cursor-pointer items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_8px_20px_rgba(37,99,235,0.35)] transition-all duration-200 hover:bg-blue-700 hover:shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_12px_24px_rgba(37,99,235,0.4)] active:scale-95 sm:px-7 sm:py-3.5 sm:text-[15px]"
		>
			<HugeiconsIcon icon={ArrowLeft01Icon} size={16} color="currentColor" />
			<span>Kembali ke Beranda</span>
		</Button>
	</section>
</main>
