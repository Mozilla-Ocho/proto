import { NavigationLinkBlockT } from 'types'

export const LINK_BLOCKS: NavigationLinkBlockT[] = [
  {
    title: 'Main',
    links: [
      {
        title: 'Home',
        url: '/home',
        icon: 'home',
      },
      {
        title: 'Code Base',
        url: '/dashboard/code',
        icon: 'code',
      },
      {
        title: 'Sandbox',
        url: '/dashboard/sandbox',
        icon: 'box',
      },
      {
        title: 'History',
        url: '/history',
        icon: 'clock',
      },
      {
        title: 'Ask',
        url: '/ask',
        icon: 'message-square',
      },
    ],
  },
  {
    title: 'Important for you',
    links: [
      {
        title: 'Week 1',
        url: '/#',
        icon: 'bar-chart',
      },
      {
        title: 'Week 2',
        url: '/#',
        icon: 'bar-chart',
      },
      {
        title: 'Week 3',
        url: '/#',
        icon: 'bar-chart',
      },
    ],
  },
  {
    title: 'Favorite Docs',
    links: [
      {
        title: 'Week 1',
        url: '/#',
        icon: 'file',
      },
      {
        title: 'Week 2',
        url: '/#',
        icon: 'file',
      },
      {
        title: 'Week 3',
        url: '/#',
        icon: 'file',
      },
    ],
  },
]
