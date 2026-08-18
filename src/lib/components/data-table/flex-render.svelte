<script lang="ts" generics="TData, TValue, TContext extends HeaderContext<TData, TValue> | CellContext<TData, TValue>">
	import type { CellContext, ColumnDefTemplate, HeaderContext } from "@tanstack/table-core";
	import type { Attachment } from "svelte/attachments";
	import { RenderComponentConfig, RenderSnippetConfig } from "$lib/components/data-table/render-helpers";

	type Props = {
		attach?: Attachment;
		content?: TContext extends HeaderContext<TData, TValue>
			? ColumnDefTemplate<HeaderContext<TData, TValue>>
			: TContext extends CellContext<TData, TValue>
				? ColumnDefTemplate<CellContext<TData, TValue>>
				: never;
		context: TContext;
	};

	let { attach, content, context }: Props = $props();
</script>

{#if typeof content === "string"}
	{content}
{:else if content instanceof Function}
	{@const result = (content as (ctx: TContext) => unknown)(context)}
	{#if result instanceof RenderComponentConfig}
		{@const { component: Component, props } = result}
		<Component {...props} {attach} />
	{:else if result instanceof RenderSnippetConfig}
		{@const { snippet, params } = result}
		{@render snippet({ ...params, attach })}
	{:else}
		{result}
	{/if}
{/if}
