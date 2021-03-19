import { Page } from "@geist-ui/react";
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
            <h3>Question one blah blah blah todo?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elitulla
              aperiam mollitia, libero, facere recusandae nam quod repudiandae
              quisquam eaque?
            </p>
          </div>
          <div className={styles.QAndA}>
            <h3>Question one blah blah blah todo?</h3>
            <p>
              Lorem, iperror iusto nulla aperiam mollitia, libero, facere
              recusandae nam quod repudiandae quisquam eaque?
            </p>
          </div>
          <div className={styles.QAndA}>
            <h3>Question one blah blah blah todo?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur debitis eum a exercitationem ut aut, similique
              laboriosam error iusto nulla aperiam mollitia, libero, facere
              recusandae nam quod repudiandae quisquam eaque?
            </p>
          </div>
          <div className={styles.QAndA}>
            <h3>Question one blah blah blah todo?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur debitis eum a exercitationem ut aut, similique
              laboriosam error iusto nulla aperiam mollitia, libero, facere
              recusandae nam quod repudiandae quisquam eaque?
            </p>
          </div>
          <div className={styles.QAndA}>
            <h3>Question one blah blah blah todo?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur debitis eum a exercitationem ut aut, similique
              laboriosam error iusto nulla aperiam mollitia, libero, facere
              recusandae nam quod repudiandae quisquam eaque?
            </p>
          </div>
        </div>
      </Page>
      <Footer />
    </>
  );
}
