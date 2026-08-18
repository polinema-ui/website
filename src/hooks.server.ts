import type { Handle } from "@sveltejs/kit";
import { getTextDirection } from "$lib/paraglide/runtime";
import { paraglideMiddleware } from "$lib/paraglide/server";

const paraglide: Handle = ({ event, resolve }) => paraglideMiddleware(event.request, ({ request, locale }: { request: Request; locale: string }) => {
	event.request = request;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%lang%", locale).replace("%dir%", getTextDirection(locale))
	});
});

export const handle: Handle = paraglide;