import Layout from "../../components/layout";
import Head from "next/head";

/**
 * The author page component.
 */
export default function Author({ authors }) {
  return (
    <Layout>
      <Head>
        <title>Authors</title>
      </Head>
      {authors}
      <article>
        <h1>An author</h1>
      </article>
    </Layout>
  );
}
