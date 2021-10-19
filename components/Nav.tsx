import { Github as GithubIcon } from "@geist-ui/react-icons";
import { detect } from "detect-browser";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import styles from "../styles/components/Nav.module.sass";

export default function Nav() {
  const [browser, setBrowser] = useState<string>("Chrome");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const browser = detect();

    if (!browser) return;
    // @ts-expect-error
    if (window.navigator.brave) return setBrowser("Brave");
    // @ts-expect-error
    else if (window.chrome || window.navigator.userAgent.match("CriOS"))
      setBrowser("Chrome");
    else if (navigator.userAgent.match("Firefox")) setBrowser("Firefox");
    else setBrowser(browser.name);
  }, []);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", updateScrolled);

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <>
      <div className={styles.Info}>
        ArConnect just released on the{" "}
        <a
          href={
            browser.toLowerCase() === "firefox" || browser === "ff"
              ? "https://addons.mozilla.org/en-GB/firefox/addon/arconnect/"
              : "https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {browser.toLowerCase() === "firefox" || browser === "ff"
            ? "Firefox Store"
            : "Chrome Web Store"}
        </a>
        →
      </div>
      <div className={styles.Nav + (scrolled ? " " + styles.Scrolled : "")}>
        <Link href="/#">
          <a className={styles.Logo}>
            <img src={logo} alt="ArConnect" draggable={false} />
            <span>ArConnect</span>
          </a>
        </Link>
        <div className={styles.MiddleGroup}>
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
          <Link href="/faq">
            <a className={styles.MenuItem}>FAQ</a>
          </Link>
        </div>
        <div className={styles.EndGroup}>
          <a
            className={styles.MenuItem + " " + styles.MenuBtn}
            href={
              browser.toLowerCase() === "firefox" || browser === "ff"
                ? "https://addons.mozilla.org/en-GB/firefox/addon/arconnect/"
                : "https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap"
            }
            style={
              browser === "firefox" || browser === "ff"
                ? { opacity: 0.7, cursor: "not-allowed" }
                : {}
            }
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
    </>
  );
}
