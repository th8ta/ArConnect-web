import { Page, Button, Code } from "@geist-ui/react";
import { detect } from "detect-browser";
import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import Head from "next/head";
import Metas from "../components/Metas";
import Link from "next/link";
import Footer from "../components/Footer";
import arverifyLogo from "../assets/arverify.svg";
import kyveLogo from "../assets/kyve.svg";
import wisdomWizardsLogo from "../assets/wisdomwizards.png";
import vertoLogo from "../assets/verto.svg";
import pianityLogo from "../assets/pianity.png";
import ardriveLogo from "../assets/ardrive.svg";
import xyzlogo from "../assets/xyz.png";
import argoraLogo from "../assets/argora.png";
import arwikiLogo from "../assets/arwiki.png";
import interfaceThumb from "../assets/interface.png";
import authThumb from "../assets/auth.png";
import styles from "../styles/views/home.module.sass";

export default function Home() {
  const [browser, setBrowser] = useState<string>("Chrome");
  const aboutSection = useRef<HTMLDivElement>();

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
                    browser.toLowerCase() === "firefox" || browser === "ff"
                      ? "https://addons.mozilla.org/en-GB/firefox/addon/arconnect/"
                      : "https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap"
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
                With ArConnect's user-friendly interface, you can manage your
                Arweave balance, view and transfer assets and see your latest
                transactions. The extension allows you to add all your wallets
                and switch between them easily. <br />
                We are also planning to support PST swapping through{" "}
                <a
                  href="https://verto.exchange"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Verto Protocol
                </a>
                .
              </p>
            </div>
            <img
              src={interfaceThumb}
              alt="feature"
              style={{ marginLeft: "3.5em" }}
              draggable={false}
            />
          </div>
          <div className={styles.AboutSection}>
            <img
              src={authThumb}
              alt="feature"
              style={{ marginRight: "3.5em" }}
              draggable={false}
            />
            <div>
              <h1>Interact with dApps</h1>
              <p>
                ArConnect makes interacting with your favorite Arweave
                applications seamless and secure. Transaction signing and text
                encryption with keyfiles is done in the background{" "}
                <b>by the extension</b>, and not the application. This ensures
                that your keyfile will never be stolen.
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
              href="https://ardrive.io"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.App}
            >
              <div className={styles.AppLogo}>
                <img src={ardriveLogo} alt="ArDrive" draggable={false} />
              </div>
              <span>ArDrive</span>
            </a>
            <a
              href="https://verto.exchange"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.App}
            >
              <div className={styles.AppLogo}>
                <img src={vertoLogo} alt="V" draggable={false} />
              </div>
              <span>Verto</span>
            </a>
            <a
              href="https://kyve.network"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.App}
            >
              <div className={styles.AppLogo}>
                <img src={kyveLogo} alt="KYVE" draggable={false} />
              </div>
              <span>KYVE</span>
            </a>
            <a
              href="https://community.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.App}
            >
              <div className={styles.AppLogo}>
                <img src={xyzlogo} alt="Community XYZ" draggable={false} />
              </div>
              <span>Community XYZ</span>
            </a>
            <a
              href="https://arverify.org"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.App}
            >
              <div className={styles.AppLogo}>
                <img src={arverifyLogo} alt="ArVerify" draggable={false} />
              </div>
              <span>ArVerify</span>
            </a>
            <a
              href="https://argora.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.App}
            >
              <div className={styles.AppLogo}>
                <img src={argoraLogo} alt="ArGora" draggable={false} />
              </div>
              <span>ArGora</span>
            </a>
            <a
              href="https://arwiki.wiki/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.App}
            >
              <div className={styles.AppLogo}>
                <img src={arwikiLogo} alt="ArWiki" draggable={false} />
              </div>
              <span>ArWiki</span>
            </a>
            <a
              //href=""
              target="_blank"
              rel="noopener noreferrer"
              className={styles.App}
            >
              <div className={styles.AppLogo + " " + styles.Pending}>
                <img src={pianityLogo} alt="Pianity" draggable={false} />
              </div>
              <span>Integration in progress</span>
            </a>
            <a
              href="https://community.xyz/#eCUK6Jrt30GKy_EKkbgExt1G0Qf_AhNAvzu4977E5sw"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.App}
            >
              <div className={styles.AppLogo}>
                <img
                  src={wisdomWizardsLogo}
                  alt="Wisdom Wizards"
                  draggable={false}
                />
              </div>
              <span>Wisdom Wizards</span>
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
