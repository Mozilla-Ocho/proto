import { NextApiRequest, NextApiResponse } from 'next'
import GithubService from '@Services/server/github.service'

const githubService = new GithubService(process.env.GITHUB_TOKEN || '')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { action, owner, repo, path } = req.query

  try {
    let data
    switch (action) {
      case 'getRepo':
        data = await githubService.getRepo(owner as string, repo as string)
        break
      case 'getContributors':
        data = await githubService.getContributors(
          owner as string,
          repo as string
        )
        break
      case 'getIssues':
        data = await githubService.getIssues(owner as string, repo as string)
        break
      case 'getPullRequests':
        data = await githubService.getPullRequests(
          owner as string,
          repo as string
        )
        break
      case 'getBranches':
        data = await githubService.getBranches(owner as string, repo as string)
        break
      case 'getTags':
        data = await githubService.getTags(owner as string, repo as string)
        break
      case 'getContents':
        data = await githubService.getContents(
          owner as string,
          repo as string,
          path as string
        )
        break
      case 'getCommits':
        data = await githubService.getCommits(owner as string, repo as string)
        break
      default:
        return res.status(400).json({ message: 'Invalid action' })
    }

    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'there was an error see logs' })
  }
}
