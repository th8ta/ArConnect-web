import { Page } from "@geist-ui/react";
import { MarkdownPreview } from "react-marked-markdown";
import { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Metas from "../components/Metas";
import Nav from "../components/Nav";
import styles from "../styles/views/docs.module.sass";

export default function Docs() {
  const [docsVal, setDocsVal] = useState("");

  useEffect(() => {
    (async () => {
      const res = await (
        await fetch(
          "https://raw.githubusercontent.com/th8ta/ArConnect/main/.github/README.md"
        )
      ).text();
      setDocsVal(res);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>ArConnect - Documentation</title>
        <link rel="shortcut icon" href="/logo256.png" />
      </Head>
      <Metas
        title="ArConnect Docs"
        description="Secure wallet management for Arweave"
        image="/logo256.png"
      />
      <Nav />
      <Page size="large" className={styles.Docs}>
        <h1>Documentation</h1>
        <MarkdownPreview value={docsVal.replaceAll("# ArConnect", "")} />
      </Page>
      <Footer />
    </>
  );
}
