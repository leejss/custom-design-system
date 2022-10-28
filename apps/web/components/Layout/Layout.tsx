import type { FC } from "react";
import Link from "next/link";
import React from "react";
import styles from "./Layout.module.scss";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/colors">Colors</Link>
        <Link href="/typography">Typography</Link>
      </nav>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
