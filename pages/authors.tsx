import { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import { getAllAuthors } from "../lib/authors";
import homeStyles from "../components/layout.module.scss";

/**
 * The author list page component.
 */
export default function Author({ authors }) {
  return (
    <Layout>
      <Head>
        <title>Authors</title>
      </Head>
      <header className={homeStyles.header}>
        <h1>Authors</h1>
      </header>
      <article>
        {authors.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </article>
    </Layout>
  );
}

/**
 * Get the data for the page, this renders on build.
 */
export const getStaticProps: GetStaticProps = async () => {
  const authors = getAllAuthors();
  return {
    props: {
      authors,
    },
  };
};
