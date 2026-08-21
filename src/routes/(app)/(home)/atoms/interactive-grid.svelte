<script lang="ts">
	/** Props for the grid size */
	let { size = 40 }: { size?: number } = $props();
	/** State for the number of columns and rows in the grid */
	let columns = $state(0);
	/** State for the number of rows in the grid */
	let rows = $state(0);
	/** State for the currently hovered cell */
	let hoveredCell = $state<{ x: number; y: number } | null>(null);
	/** Reference to the grid container */
	let container: HTMLElement;
	/** Derived state for the row indices */
	let rowIndices = $derived(Array.from({ length: rows }, (_, i) => i));
	/** Derived state for the column indices */
	let colIndices = $derived(Array.from({ length: columns }, (_, i) => i));

	$effect(() => {
		if (!container) return;
		const updateSize = () => {
			columns = Math.ceil(container.clientWidth / size);
			rows = Math.ceil(container.clientHeight / size);
		};
		const handleMouseMove = (e: MouseEvent) => {
			if (!container) return;
			const rect = container.getBoundingClientRect();
			if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
				hoveredCell = null;
				return;
			}
			const cellX = Math.floor((e.clientX - rect.left) / size);
			const cellY = Math.floor((e.clientY - rect.top) / size);
			if (hoveredCell?.x === cellX && hoveredCell?.y === cellY) return;
			hoveredCell = { x: cellX, y: cellY };
		};
		updateSize();
		window.addEventListener("resize", updateSize);
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("resize", updateSize);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	});
</script>

<div bind:this={container} class="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-blue-600">
	<div
		class="absolute inset-0"
		style="background-image:
		    radial-gradient(ellipse 75% 65% at 50% 0%, white 0%, white 70%, rgb(255 255 255 / 0) 80%),
		    radial-gradient(ellipse 75% 65% at 50% 100%, white 0%, white 70%, rgb(255 255 255 / 0) 80%);"
	></div>

	<figure
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 z-0 overflow-hidden mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
		style="display: grid; grid-template-columns: repeat({columns}, {size}px); grid-template-rows: repeat({rows}, {size}px);"
	>
		{#each rowIndices as r (r)}
			{#each colIndices as c (c)}
				{@const isHovered = hoveredCell && Math.abs(hoveredCell.x - c) <= 1 && Math.abs(hoveredCell.y - r) <= 1}
				<div
					class="border-r border-b border-white/20 transition-colors {isHovered
						? 'bg-white/15 duration-75'
						: 'bg-transparent duration-500'}"
				></div>
			{/each}
		{/each}
	</figure>
</div>
