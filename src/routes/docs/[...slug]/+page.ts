import { error } from "@sveltejs/kit";
import type { Component } from "svelte";
import type { PageLoad } from "./$types";

// prettier-ignore
export const load: PageLoad = async ({ params }) => {
	const slug = params.slug || "index";
	const posts = import.meta.glob<{ default: Component; metadata?: Record<string, unknown> }>("/src/docs/**/*.{md,svx}");
	const loader = posts[`/src/docs/${slug}.md`] || posts[`/src/docs/${slug}.svx`];

	if (!loader) {
		throw error(404, {
			message: "Dokumentasi tidak ditemukan",
			description: `File untuk path /docs/${slug} tidak tersedia.`
		});
	}

	const post = await loader();

	return {
		content: post.default,
		meta: post.metadata ?? {},
	};
};
