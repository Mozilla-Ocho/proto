import axios, { AxiosInstance } from 'axios'
import { GithubRepositoryT, GithubContributorT, GithubIssueT } from 'types'

class GithubService {
  private api: AxiosInstance

  constructor(private token: string) {
    this.api = axios.create({
      baseURL: 'https://api.github.com',
      headers: {
        Authorization: `token ${token}`,
      },
    })
  }

  // Get repository details
  async getRepo(owner: string, repo: string) {
    const response = await this.api.get(`/repos/${owner}/${repo}`)
    return response.data as GithubRepositoryT
  }

  // List repository contributors
  async getContributors(owner: string, repo: string) {
    const response = await this.api.get(`/repos/${owner}/${repo}/contributors`)
    return response.data as GithubContributorT[]
  }

  // List repository issues
  async getIssues(owner: string, repo: string) {
    const response = await this.api.get(`/repos/${owner}/${repo}/issues`)
    return response.data as GithubIssueT[]
  }

  // List repository pull requests
  async getPullRequests(owner: string, repo: string) {
    const response = await this.api.get(`/repos/${owner}/${repo}/pulls`)
    return response.data
  }

  // List repository branches
  async getBranches(owner: string, repo: string) {
    const response = await this.api.get(`/repos/${owner}/${repo}/branches`)
    return response.data
  }

  // List repository tags
  async getTags(owner: string, repo: string) {
    const response = await this.api.get(`/repos/${owner}/${repo}/tags`)
    return response.data
  }

  // Get contents of a file or directory
  async getContents(owner: string, repo: string, path: string) {
    const response = await this.api.get(
      `/repos/${owner}/${repo}/contents/${path}`
    )
    return response.data
  }

  // List commits on a repository
  async getCommits(owner: string, repo: string) {
    const response = await this.api.get(`/repos/${owner}/${repo}/commits`)
    return response.data
  }
}

export default GithubService
