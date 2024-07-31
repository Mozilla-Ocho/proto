import { ReactNode } from 'react'
import SideNav from '@Navigation/SideNav/SideNav'
import styles from './layout.module.scss'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <SideNav />
      {children}
    </div>
  )
}
