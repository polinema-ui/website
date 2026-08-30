import type { FrameworkMetadata } from "../types/showcase";

export const FRAMEWORKS: readonly FrameworkMetadata[] = [
	{
		id: "html",
		label: "HTML",
		logo: "/lang/html.webp",
		description:
			"Copy markupnya langsung ke file .html lau. Semua struktur udah di group rapi dari parent sampe child. Kalo butuh interaksi, tinggal pasang Alpine.js atau Vanilla JS tanpa takut styling berantakan.",
		code: `<div class="flex flex-col space-y-2 p-6 rounded-2xl border border-neutral-200">
			<h3 class="text-lg font-bold tracking-tight text-neutral-900">
				Project Based Learning
			</h3>
			<p class="text-sm text-neutral-500">
				Sistem Informasi Akademik Terpadu.
			</p>
			<button class="mt-4 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
				Lihat Detail
			</button>
		</div>`,
	},
	{
		id: "php",
		label: "PHP Native",
		logo: "/lang/php.webp",
		description:
			"Sama persis kayak HTML, tapi lo bisa langsung inject variabel atau logic PHP native di dalamnya. Cocok banget buat tugas PBL yang masih minta pake PHP terstruktur atau OOP dasar.",
		code: `<?php
			$title = "Sistem Inventaris";
			$status = "Active";
		?>
		<div class="p-6 rounded-2xl border border-neutral-200">
			<div class="flex items-center justify-between">
				<h3 class="text-lg font-bold text-neutral-900"><?= $title ?></h3>
				<span class="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
					<?= $status ?>
				</span>
			</div>
		</div>`,
	},
	{
		id: "blade",
		label: "Laravel Blade",
		logo: "/lang/laravel.webp",
		description:
			"Pecah aja jadi sub-komponen di resources/views/. Kita sengaja tetep pake tag HTML asli (kayak <button> atau <table>) alih-alih custom tag biar auto-complete code editor lo tetep jalan.",
		code: `<div {{ $attributes->merge(['class' => 'rounded-2xl border bg-white p-6 shadow-sm']) }}>
				{{ $slot }}
		</div>

		<x-card class="max-w-md">
				<h3 class="font-bold">Data Mahasiswa</h3>
				<p>Total: {{ $count }} orang</p>
		</x-card>`,
	},
	{
		id: "react",
		label: "React / Next.js",
		logo: "/lang/react.webp",
		description:
			"Udah support TypeScript out-of-the-box. Tinggal copas ke folder components/ui, mainkan props-nya, dan lo siap bikin dashboard modern ala enterprise. Nggak ada dependency ribet.",
		code: `import * as React from "react"
		import { Button } from "@/components/ui/button"

		export function Showcase() {
			return (
				<div className="space-y-4 rounded-2xl border p-6">
					<h3 className="text-xl font-bold">Siap Pakai</h3>
					<Button variant="default" onClick={() => alert("Gas!")}>
						Deploy Sekarang
					</Button>
				</div>
			)
		}`,
	},
] as const;
