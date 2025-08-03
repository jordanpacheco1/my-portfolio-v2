export interface GitHubRepository {
  id: number
  name: string
  description: string | null
  html_url: string
  topics: string[]
  language: string | null
  stargazers_count: number
  forks_count: number
  created_at: string
  updated_at: string
  pushed_at: string
  private: boolean
}

export interface ProjectData {
  name: string
  description: string
  url: string
  technologies: string[]
  stars: number
  forks: number
  lastUpdated: string
  demoUrl?: string
  private?: boolean
}

const GITHUB_USERNAME = 'jordanpacheco1'
const GITHUB_API_BASE = 'https://api.github.com'

/**
 * Fetch all public repositories for the user
 */
export async function fetchGitHubRepositories(): Promise<GitHubRepository[]> {
  const response = await fetch(
    `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?type=public&sort=updated&per_page=100`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    }
  )

  if (!response.ok) {
    throw new Error(
      `GitHub API error: ${response.status} ${response.statusText}`
    )
  }

  return response.json()
}

const KNOWN_VERCEL_DEPLOYMENTS: Record<string, string> = {
  'my-portfolio-v2': 'https://my-portfolio-v2-xi-lake.vercel.app',
  'nlw-move-it': 'https://moveit-lake-nine.vercel.app/',
  interposto: 'https://interposto.vercel.app'
}

/**
 * Manual entries for private repositories that you want to showcase
 * These won't appear in the GitHub API response but will be included in the projects list
 */
const PRIVATE_REPOSITORIES: GitHubRepository[] = [
  {
    id: 999_999, // Use a unique ID
    name: 'interposto',
    description: 'Private repository with Vercel deployment',
    html_url: 'https://github.com/jordanpacheco1/interposto', // GitHub URL (even if private)
    topics: ['react', 'typescript', 'vercel'], // Add relevant topics
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    pushed_at: '2024-01-01T00:00:00Z',
    private: true
  }
  // Add more private repositories here if needed
]

/**
 * Get the Vercel deployment URL for a repository from manual mapping
 */
function getVercelDeploymentUrl(repoName: string): string | undefined {
  return KNOWN_VERCEL_DEPLOYMENTS[repoName]
}

export function transformRepositoryToProject(
  repo: GitHubRepository
): ProjectData {
  // Get demo URL if this repository has a known Vercel deployment
  const demoUrl = getVercelDeploymentUrl(repo.name)

  return {
    name: repo.name,
    description: repo.description || 'No description available',
    url: repo.html_url,
    technologies: repo.topics || [],
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    lastUpdated: repo.updated_at,
    demoUrl,
    private: repo.private
  }
}

/**
 * Fetch and transform repositories to project format
 */
export async function fetchProjects(): Promise<ProjectData[]> {
  const publicRepositories = await fetchGitHubRepositories()

  // Combine public repositories with private ones
  const allRepositories = [...publicRepositories, ...PRIVATE_REPOSITORIES]

  // Filter out forked repositories and sort by last updated
  const ownRepositories = allRepositories
    .filter((repo) => !repo.private || PRIVATE_REPOSITORIES.includes(repo)) // Include private repos from our manual list
    .sort(
      (a, b) =>
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    )

  return ownRepositories.map(transformRepositoryToProject)
}
