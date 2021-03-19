import { Page } from "@geist-ui/react";
import Link from "next/link";
import logo from "../assets/logo.png";
import styles from "../styles/components/Footer.module.sass";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Page size="large" style={{ minHeight: "unset" }}>
        <div className={styles.menus}>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>
                <Link href="/docs">Documentation</Link>
              </li>
              <li>
                <a
                  href="https://blog.th8ta.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://arweave.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Arweave
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Tools</h4>
            <ul>
              <li>
                <a
                  href="https://th8ta.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  th8ta
                </a>
              </li>
              <li>
                <a
                  href="https://verto.exchange"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>About us</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/th8ta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/vertoexchange"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://verto.exchange/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/th8ta/ArConnect/blob/master/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.branding}>
          <div>
            <img src={logo} alt="logo" />
            ArConnect
          </div>
        </div>
        <p className={styles.copyright}>
          Copyright © {new Date().getFullYear()} th8ta. Licensed under the{" "}
          <a
            href="http://opensource.org/licenses/mit-license.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT License
          </a>
          .
        </p>
      </Page>
    </footer>
  );
}
