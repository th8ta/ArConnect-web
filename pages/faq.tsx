import { Page, Code } from "@geist-ui/react";
import Head from "next/head";
import Footer from "../components/Footer";
import Metas from "../components/Metas";
import Nav from "../components/Nav";
import styles from "../styles/views/faq.module.sass";

export default function FAQ() {
  return (
    <>
      <Head>
        <title>ArConnect - Frequently Asked Questions</title>
      </Head>
      <Metas
        title="ArConnect FAQ"
        description="Secure wallet management for Arweave"
        image="/logo256.png"
      />
      <Nav />
      <Page size="large" className={styles.FAQ}>
        <h1 className={styles.Title}>FAQ</h1>
        <p className={styles.Subtitle}>
          Frequently Asked Questions about ArConnect
        </p>
        <div className={styles.Questions}>
          <div className={styles.QAndA}>
            <h3>Do you upload or post my keyfile anywhere?</h3>
            <p>
              <b>No, we don't.</b> ArConnect is built to be a secure Arweave
              wallet extension, but it does not back up your keyfiles and it
              never uploads them anywhere. Your wallets will be saved to your
              browser's local storage only. <br />
              You can check out our{" "}
              <a
                href="https://github.com/th8ta/ArConnect"
                target="_blank"
                rel="noopener noreferrer"
              >
                source code
              </a>{" "}
              if you'd like to verify.
            </p>
          </div>
          <div className={styles.QAndA}>
            <h3>
              Why is ArConnect more secure than just uploading my keyfile?
            </h3>
            <p>
              <b>
                ArConnect signs transactions locally, only on the client side.
              </b>{" "}
              If you upload your keyfile somewhere, there is a chance that
              either malicious dApps or a third party tries to steal it from
              you.
            </p>
          </div>
          <div className={styles.QAndA}>
            <h3>How can I name a wallet?</h3>
            <p>
              It is very simple to add a custom label / nickname to your wallet.
              Open the wallet manager dropdown, in the extension popup, than
              just click the displayed name. It is an editable text, so your
              changes will instantly appear.
            </p>
          </div>
          <div className={styles.QAndA}>
            <h3>Do you charge any fees?</h3>
            <p>
              We at{" "}
              <a
                href="https://th8ta.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                th8ta
              </a>{" "}
              are working hard to bring you the best experiences on the
              permaweb. Because of this, we take a small tip whenever a
              3rd-party application utilizes ArConnect. This tip goes to a
              randomly-selected VRT token holder:
              <ul>
                <li>
                  <Code>$0.03</Code> USD-equivalent of AR for the first 10
                  transactions
                </li>
                <li>
                  <Code>$0.01</Code> USD-equivalent of AR for all subsequent
                  transactions
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.QAndA}>
            <h3>Do you charge fees for transfers made with the extension?</h3>
            <p>
              <b>We do not</b> charge fees for AR transfers or PST transfers
              that <b>you, as the user,</b> make inside the extension. We only
              charge fees when interacting with dApps.
            </p>
          </div>
          <div className={styles.QAndA}>
            <h3>Does ArConnect have dark mode?</h3>
            <p>
              <b>Yes it does.</b> It is automatic, meaning that it will use your
              browser's color scheme. To enable the dark theme, all you need to
              do is to toggle your browser's dark mode.
            </p>
          </div>
        </div>
      </Page>
      <Footer />
    </>
  );
}
