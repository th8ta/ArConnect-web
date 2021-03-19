import { Page, Button, Code } from "@geist-ui/react";
import { detect } from "detect-browser";
import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import Head from "next/head";
import Metas from "../components/Metas";
import Link from "next/link";
import Footer from "../components/Footer";
import arverifyLogo from "../assets/arverify.svg";
import vertoLogo from "../assets/verto.svg";
import styles from "../styles/views/home.module.sass";

export default function Home() {
  const [browser, setBrowser] = useState<string>();
  const aboutSection = useRef<HTMLDivElement>();

  useEffect(() => {
    const browser = detect();

    if (!browser) return;
    setBrowser(browser.name);
  }, []);

  return (
    <>
      <Head>
        <title>ArConnect - Secure wallet management for Arweave</title>
        <link rel="shortcut icon" href="/logo256.png" />
      </Head>
      <Metas
        title="ArConnect"
        description="Secure wallet management for Arweave"
        image="/logo256.png"
      />
      <Nav />
      <Page size="large">
        <div className={styles.Landing}>
          <div className={styles.Content}>
            <h1>Secure wallet management for Arweave</h1>
            <p>
              A simple and secure way to manage your Arweave assets and connect
              with dApps.
            </p>
            <div className={styles.Btns}>
              <Button
                shadow
                type="secondary"
                size="large"
                style={{ marginRight: ".55em" }}
                onClick={() =>
                  window.open(
                    (browser === "firefox" && "") || // TODO firefox link
                      "https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap"
                  )
                }
              >
                Download for {browser?.toLowerCase()}
              </Button>
              <Button
                shadow
                size="large"
                style={{ marginLeft: ".55em" }}
                onClick={() =>
                  scroll({
                    top: aboutSection.current?.offsetTop,
                    left: 0,
                    behavior: "smooth"
                  })
                }
              >
                Read more
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.About} ref={aboutSection}>
          <div className={styles.AboutSection}>
            <div>
              <h1>View, Swap and Transfer assets</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                aut ut, numquam enim veniam laudantium obcaecati libero ullam
                vitae qui officiis, magni mollitia delectus a nemo? Dolorem sunt
                vitae tempore.
              </p>
            </div>
            <img
              src="https://picsum.photos/id/1060/536/354?blur=2"
              alt="feature"
              style={{ marginLeft: "3.5em" }}
              draggable={false}
            />
          </div>
          <div className={styles.AboutSection}>
            <img
              src="https://picsum.photos/id/1060/536/354?blur=2"
              alt="feature"
              style={{ marginRight: "3.5em" }}
              draggable={false}
            />
            <div>
              <h1>Interact with dApps</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                aut ut, numquam enim veniam laudantium obcaecati libero ullam
                vitae qui officiis, magni mollitia delectus a nemo? Dolorem sunt
                vitae tempore.
              </p>
            </div>
          </div>
        </div>
      </Page>
      <div className={styles.Uses}>
        <Page size="large" style={{ minHeight: "unset" }}>
          <h1>Who's using ArConnect?</h1>
          <p>
            ArConnect is gaining more adoption day by day as developers and apps
            open to a more secure and safer web!
          </p>
          <div className={styles.Apps}>
            <a
              href="https://verto.exchange"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.App}
            >
              <div className={styles.AppLogo + " " + styles.Pending}>
                <img src={vertoLogo} alt="V" draggable={false} />
              </div>
              <span>Integration in progress</span>
            </a>
            <a
              href="https://arverify.org"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.App}
            >
              <div className={styles.AppLogo + " " + styles.Pending}>
                <img src={arverifyLogo} alt="ArVerify" draggable={false} />
              </div>
              <span>Integration in progress</span>
            </a>
          </div>
          <p className={styles.Integrate}>
            <Link href="/docs">Integrate</Link> ArConnect today!
          </p>
        </Page>
      </div>
      <Page size="large" style={{ minHeight: "unset" }}>
        <div className={styles.Developers}>
          <h1>Adopt ArConnect</h1>
          <p>Signing transactions has never been safer and easier</p>
          <div className={styles.IntegrateCode}>
            <Code block>{`const tx = await arweave.createTransaction({
  /* config */
});\n
await arweave.transactions.sign(tx);
await arweave.transactions.post(tx);`}</Code>
          </div>
          <p style={{ marginBottom: "0" }}>
            Read the <Link href="/docs">docs</Link> for deeper integration.
          </p>
        </div>
      </Page>
      <Footer />
    </>
  );
}
