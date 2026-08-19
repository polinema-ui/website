export async function fetchGithubStars(repo: string, fallback = 12): Promise<string> {
	try {
		const response = await fetch(`https://api.github.com/repos/${repo}`);
		if (!response.ok) throw new Error("Failed to fetch stars");
		const data = await response.json();
		if (data && typeof data.stargazers_count === "number") {
			return String(data.stargazers_count);
		}
		return String(fallback);
	} catch {
		return String(fallback);
	}
}
