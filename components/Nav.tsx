import { Github as GithubIcon } from "@geist-ui/react-icons";
import Link from "next/link";
import logo from "../assets/logo.png";
import styles from "../styles/components/Nav.module.sass";

export default function Nav() {
  return (
    <div className={styles.Nav}>
      <Link href="/#">
        <a className={styles.Logo}>
          <img src={logo} alt="ArConnect" />
          <span>ArConnect</span>
        </a>
      </Link>
      <Link href="/docs">
        <a className={styles.MenuItem}>Docs</a>
      </Link>
      <a
        className={styles.MenuItem}
        href="https://blog.th8ta.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Blog
      </a>
      <a
        className={styles.MenuItem}
        href="https://arweave.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Arweave
      </a>
      <Link href="/docs">
        <a className={styles.MenuItem}>Docs</a>
      </Link>
      <div className={styles.EndGroup}>
        <a
          className={styles.MenuItem + " " + styles.MenuBtn}
          href="https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
        <a
          className={styles.MenuItem}
          href="https://github.com/th8ta/ArConnect"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}
