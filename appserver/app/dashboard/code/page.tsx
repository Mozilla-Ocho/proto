import GithubService from '@Services/server/github.service'
import styles from './page.module.scss'
import Markdown from 'react-markdown'

export default async function Page() {
  const githubService = new GithubService(process.env.GITHUB_TOKEN || '')

  const repo = await githubService.getRepo('Facebook', 'React')
  const contributors = await githubService.getContributors('Facebook', 'React')
  const issues = await githubService.getIssues('Facebook', 'React')
  const content = await githubService.getContents(
    'Facebook',
    'React',
    'README.md'
  )
  console.log('content', content)
  console.log(
    'buffer content',
    Buffer.from(content.content, 'base64').toString('utf-8')
  )

  return (
    <div className="page_wrapper">
      <h1 className="heading-lg">Code Base</h1>
      <div className="card">
        <h3 className="heading-xs mb-24">File content test</h3>
        <div className="markdown">
          <Markdown>
            {Buffer.from(content.content, 'base64').toString('utf-8')}
          </Markdown>
        </div>
      </div>
      <div className="flex gap-12">
        <div className="card">
          <h3 className="heading-xs mb-24">Repo Details</h3>
          <div className="flex-col gap-12 ">
            <p>
              <strong>Owner:</strong> {repo.owner.login}
            </p>
            <p>
              <strong>Private:</strong> {repo.private ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Default Branch:</strong> {repo.default_branch}
            </p>
            <p>
              <strong>Language:</strong> {repo.language}
            </p>
            <p>
              <strong>Size:</strong> {repo.size}
            </p>
          </div>
        </div>
        <div className="card grow">
          <h3 className="heading-xs mb-24">Top Contributors</h3>
          <div className={styles.contributor}>
            {contributors.map((contributor) => (
              <div key={contributor.id}>
                <p>
                  <strong>Login:</strong> {contributor.login}
                </p>
                <p>
                  <strong>Contributions:</strong> {contributor.contributions}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="card">
          <h3 className="heading-xs mb-24">Repo Issues</h3>
          <div className="flex-col gap-12 font-14">
            {issues.map((issue) => (
              <div key={issue.id}>
                <p>
                  <strong>Title:</strong> {issue.title}
                </p>
                <p>
                  <strong>State:</strong> {issue.state}
                </p>
                <p>
                  <strong>Comments:</strong> {issue.comments}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
