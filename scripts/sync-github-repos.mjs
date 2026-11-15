import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const username = "ivomahendra";
const output = resolve("src/data/github-repos.json");
const endpoint = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=owner`;

try {
  const response = await fetch(endpoint, {
    headers: {
      "Accept": "application/vnd.github+json",
      "User-Agent": "ivomahendra-portfolio-build"
    }
  });
  if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
  const repos = await response.json();
  const normalized = repos
    .filter((repo) => !repo.fork && !repo.archived)
    .map((repo) => ({
      name: repo.name,
      description: repo.description ?? "",
      url: repo.html_url,
      homepage: repo.homepage || "",
      language: repo.language || "",
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
      topics: repo.topics || []
    }));
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, `${JSON.stringify(normalized, null, 2)}\n`);
  console.log(`Synced ${normalized.length} public repositories.`);
} catch (error) {
  console.warn(`GitHub sync skipped: ${error.message}`);
  try {
    await readFile(output, "utf8");
    console.warn("Keeping the last known repository snapshot.");
  } catch {
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, "[]\n");
  }
}
