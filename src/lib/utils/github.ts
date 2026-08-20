import { logger } from "$lib/utils/logger";

/**
 * @description Fetches the number of stars for a given GitHub repository.
 * @param {string} repo
 * @param {number} fallback
 * @returns {Promise<string>}
 */
export async function fetchGithubStars(repo: string, fallback = 12): Promise<string> {
	try {
		const response = await fetch(`https://api.github.com/repos/${repo}`);

		if (!response.ok) {
			throw new Error(`[${new Date().toISOString()}] Failed to fetch GitHub stars for ${repo}: ${response.text()}`);
		}

		const data: { stargazers_count?: number } = await response.json();

		if (data && typeof data.stargazers_count === "number") {
			return String(data.stargazers_count);
		}

		return String(fallback);
	} catch (error) {
		logger.error(`Error fetching GitHub stars for ${repo}: ${(error as Error).message}`, { error });
		return String(fallback);
	}
}
