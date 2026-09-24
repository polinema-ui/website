<script lang="ts" module>
	export type PropDef = {
		name: string;
		type: string;
		default: string;
		description: string;
	};
</script>

<script lang="ts">
	let { props }: { props: readonly PropDef[] } = $props();
</script>

<div
	class="not-prose my-6 w-full overflow-x-auto rounded-lg border border-neutral-200 bg-white dark:border-white/10 dark:bg-black"
>
	<table class="w-full min-w-160 border-collapse text-left text-[13px]">
		<thead>
			<tr class="border-b border-neutral-200 bg-black/[0.03] dark:border-white/10 dark:bg-white/5">
				<th scope="col" class="px-4 py-3 font-semibold whitespace-nowrap text-neutral-900 dark:text-white">Prop</th>
				<th scope="col" class="px-4 py-3 font-semibold whitespace-nowrap text-neutral-900 dark:text-white">Type</th>
				<th scope="col" class="px-4 py-3 font-semibold whitespace-nowrap text-neutral-900 dark:text-white">Default</th>
				<th scope="col" class="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Deskripsi</th>
			</tr>
		</thead>
		<tbody>
			{#each props as prop (prop.name)}
				<tr
					class="border-b border-neutral-200 transition-colors last:border-0 hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/5"
				>
					<td class="px-4 py-3 whitespace-nowrap">
						<code
							class="rounded bg-black/5 px-1.5 py-0.5 font-mono text-xs text-neutral-800 dark:bg-white/10 dark:text-neutral-100"
						>
							{prop.name}
						</code>
					</td>
					<td class="px-4 py-3">
						<code
							class="rounded bg-black/5 px-1.5 py-0.5 font-mono text-xs break-all text-blue-700 dark:bg-white/10 dark:text-blue-300"
						>
							{prop.type}
						</code>
					</td>
					<td class="px-4 py-3 whitespace-nowrap">
						<code
							class="rounded bg-black/5 px-1.5 py-0.5 font-mono text-xs text-neutral-800 dark:bg-white/10 dark:text-neutral-100"
						>
							{prop.default}
						</code>
					</td>
					<td class="px-4 py-3 leading-relaxed text-neutral-600 dark:text-neutral-400">{prop.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
