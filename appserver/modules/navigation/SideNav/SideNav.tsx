import styles from './SideNav.module.scss'
import { IconT, Icon, Select } from 'react-element-forge'
import { NavigationLinkBlockT } from 'types'
import { LINK_BLOCKS } from './const'
import Link from 'next/link'
import Image from 'next/image'
import SideNavSelect from './SideNavSelect'

type LinkBlockPropsT = {
  block: NavigationLinkBlockT
  className?: string
}
const LinkBlock = ({ block, className = '' }: LinkBlockPropsT) => {
  return (
    <div className={`${styles.link_block} ${className}`}>
      <div className={styles.link_block_title}>{block.title}</div>
      <div className={styles.link_block_links}>
        {block.links.map((link, i) => (
          <Link
            key={link.title}
            href={link.url}
            className={styles.link_block_link}
          >
            <Icon name={link.icon} className="mr-8" size={18} />
            <span>{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

type SideNavPropsT = {
  className?: string
}
const SideNav = ({ className = '' }: SideNavPropsT) => {
  return (
    <nav className={`${styles.wrapper} ${className}`}>
      <div className=" mb-32">
        <div className="items-center justify-between mb-12">
          <Image src="/logo.png" alt="Logo" width={108} height={29} />
          <div className="items-center gap-16">
            <Link href="/#">
              <Icon name="search" size={18} />
            </Link>
            <Link href="/#">
              <Icon name="edit" size={18} />
            </Link>
            <Link href="/#">
              <Icon name="download" size={18} />
            </Link>
          </div>
        </div>
        <SideNavSelect />
      </div>

      <div className={styles.link_blocks}>
        {LINK_BLOCKS.map((block, i) => (
          <LinkBlock key={block.title} block={block} />
        ))}
      </div>
    </nav>
  )
}

export default SideNav
