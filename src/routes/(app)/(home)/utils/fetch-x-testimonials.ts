import { env } from "$env/dynamic/private";
import { logger } from "$lib/utils/logger";
import type { Testimonial } from "$routes/(app)/(home)/types/testimonials";
import type { XUser } from "$routes/(app)/(home)/types/x-user";

const TWEET_SEARCH_ENDPOINT = "https://api.twitter.com/2/tweets/search/recent";

/**
 * @description Fetches testimonials from X (formerly Twitter) based on a search query. Don't use this function in Svelte, instead use it in +page.server.ts or +layout.server.ts to avoid exposing your API token and client-side code.
 * @param query - The search query to fetch testimonials from X (formerly Twitter). Defaults to "#PolinemaUI".
 * @returns {Promise<Testimonial[]>} An array of testimonials fetched from X (formerly Twitter) based on the provided query.
 */
export async function fetchXTestimonials(query = "#PolinemaUI"): Promise<Testimonial[]> {
	const token = env.X_API_BEARER_TOKEN;

	if (!token) {
		logger.warn("X_API_BEARER_TOKEN is not defined in environment variables.");
		return [];
	}

	try {
		const url = `${TWEET_SEARCH_ENDPOINT}?query=${encodeURIComponent(query)}&expansions=author_id&user.fields=name,username,profile_image_url`;
		const res = await fetch(url, {
			headers: { Authorization: `Bearer ${token}` },
		});

		if (!res.ok) throw new Error(`X API responded with status ${res.status}`);

		const data: {
			includes?: { users?: XUser[] };
			data?: { id: string; author_id: string; text: string }[];
		} = await res.json();

		const usersMap = new Map(data.includes?.users?.map((user) => [user.id, user]) || []);

		return (data.data || []).map((tweet) => {
			const user = usersMap.get(tweet.author_id);

			return {
				name: user?.name || "Anonymous",
				handle: `@${user?.username || "user"}`,
				avatar: user?.profile_image_url || "https://unavatar.io/x/twitter",
				content: tweet.text,
				url: `https://x.com/${user?.username || "user"}/status/${tweet.id}`,
			};
		});
	} catch (error) {
		logger.error(`Error fetching X testimonials: ${error instanceof Error ? error.message : String(error)}`);
		return [];
	}
}
