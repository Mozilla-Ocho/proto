export type NavigationT = {
  bannerText: string
  links: LinkT
}

export type LinkT = {
  href: string
  label: string
  text: string
}

export type UserT = {
  given_name: string
  nickname: string
  name: string
  picture: string
  updated_at: string
  email: string
  email_verified: boolean
  sub: string
  sid: string
}

// NAVIGATION

export type NavigationLinkT = {
  title: string
  url: string
  icon: IconT
}

export type NavigationLinkBlockT = {
  title: string
  links: NavigationLinkT[]
}

// Github
export interface GithubRepositoryT {
  id: number
  name: string
  full_name: string
  owner: Owner
  private: boolean
  html_url: string
  description: string
  fork: boolean
  url: string
  created_at: string
  updated_at: string
  pushed_at: string
  homepage: string | null
  size: number
  stargazers_count: number
  watchers_count: number
  language: string
  forks_count: number
  open_issues_count: number
  master_branch?: string
  default_branch: string
}

export interface GithubOwnerT {
  login: string
  id: number
  avatar_url: string
  html_url: string
}

export interface GithubContributorT {
  login: string
  id: number
  avatar_url: string
  html_url: string
  contributions: number
}

export interface GithubIssueT {
  id: number
  number: number
  title: string
  user: User
  state: string
  locked: boolean
  comments: number
  created_at: string
  updated_at: string
  closed_at: string | null
  body: string
}

export interface GithubUserT {
  login: string
  id: number
  avatar_url: string
  html_url: string
}

export interface GithubPullRequestT {
  id: number
  number: number
  state: string
  title: string
  user: User
  body: string
  created_at: string
  updated_at: string
  closed_at: string | null
  merged_at: string | null
}

export interface GithubBranchT {
  name: string
  commit: {
    sha: string
    url: string
  }
  protected: boolean
}

export interface GithhubTagT {
  name: string
  commit: {
    sha: string
    url: string
  }
  zipball_url: string
  tarball_url: string
}

export interface GithubContentT {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string | null
  type: string
}

export interface GithubCommitT {
  sha: string
  node_id: string
  commit: {
    author: {
      name: string
      email: string
      date: string
    }
    committer: {
      name: string
      email: string
      date: string
    }
    message: string
    tree: {
      sha: string
      url: string
    }
    url: string
    comment_count: number
  }
  url: string
  html_url: string
  comments_url: string
  author: User
  committer: User
  parents: Array<{
    sha: string
    url: string
    html_url: string
  }>
}

export type MessageT = {
  role: Role
  content: string
}

export type UserChatMetaT = {
  name: string
  avatar: string
  avatarAlt: string
}
