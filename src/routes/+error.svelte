<script lang="ts">
	import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { page } from "$app/state";
	import { Button } from "$lib/components/button";
	import { Routes } from "$lib/constants/routes";
</script>

<svelte:head>
	<title>{page.status} | Polinema UI</title>
</svelte:head>

<main class="flex min-h-screen flex-col items-center justify-center px-4 text-center">
	<img
		src="/logo.png"
		alt="Polinema UI Logo"
		class="mb-8 h-16 opacity-90 grayscale transition-all duration-500 select-none hover:grayscale-0"
	/>
	<h1 class="text-9xl font-black text-gray-200 select-none">
		{page.status}
	</h1>
	<div class="relative z-10 -mt-8 space-y-2">
		<h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
			{#if page.status === 404}
				Halaman Tidak Ditemukan
			{:else if page.status === 401}
				Akses Ditolak
			{:else}
				Terjadi Kesalahan
			{/if}
		</h2>
		<p class="mx-auto max-w-md text-gray-500">
			{#if page.status === 404}
				Oops, the page you are looking for does not exist or has been moved.
			{:else}
				{page.error?.message || "Please contact the administrator if this issue persists."}
			{/if}
		</p>
	</div>
	<span class="mt-8">
		<Button
			href={Routes.HOME}
			class="rounded-xl bg-blue-600 px-6 py-5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:ring-4 focus:ring-blue-200"
		>
			<HugeiconsIcon icon={ArrowLeft01Icon} class="mr-2 h-5 w-5" />
			Kembali
		</Button>
	</span>
</main>
