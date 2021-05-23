import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/Layout";
import homeStyles from "../components/Layout/Layout.module.scss";

/**
 * The about page component.
 *
 * @returns The About page
 */
const About = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <section>
          <h1>About us</h1>
          <p>Rag tag band of misfits ready to blog stuff up.</p>
        </section>

        <div className={homeStyles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default About;
