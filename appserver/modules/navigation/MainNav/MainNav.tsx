import { useCallback, useState } from "react";
import styles from "./MainNav.module.scss";
import { Button, Icon, Modal, LinkComponentT } from "react-element-forge";
import { NavigationT } from "types";
import Link from "next/link";
import { Claims } from "@auth0/nextjs-auth0";

type MainNavPropsT = {
  navData?: NavigationT;
  mobileMenuClick?: () => void;
  user?: Claims;
  className?: string;
};

const MainNav = ({
  navData,
  mobileMenuClick,
  user,
  className = "",
}: MainNavPropsT) => {
  return (
    <>
      <nav className={`${styles.main_nav} ${className}`}>
        <div className={styles.main_nav_wrapper}>
          <div className={styles.main_nav_container}>
            {/* Main navigation links / logo */}
            <div className={styles.main_nav_contents}>
              {/* Logo */}
              <Link href="/">
                <div className="heading-sm">PROTO</div>
              </Link>

              {/* Links  */}
              <div className={styles.main_nav_links}>
                <Link href="/" className={styles.main_nav_link}>
                  Home
                </Link>

                {user && (
                  <Link href="/profile" className={styles.main_nav_link}>
                    Profile
                  </Link>
                )}
              </div>
            </div>

            <div className="flex-align-center">
              <div className={styles.main_nav_actions}>
                {/* <Icon name="activity" /> */}

                {user ? (
                  <Button
                    text="logout"
                    category="secondary_outline"
                    href="/api/auth/logout"
                    LinkComponent={Link as LinkComponentT}
                  />
                ) : (
                  <Button
                    text="login"
                    category="secondary_outline"
                    href="/api/auth/login"
                    LinkComponent={Link as LinkComponentT}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
