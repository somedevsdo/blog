import { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../components/Layout/layout";
import { getAllAuthors } from "../lib/authors";
import homeStyles from "../components/Layout/layout.module.scss";
import Link from "next/link";

interface IAuthorsProps {
  authors: Object;
}

/**
 * The author list page component.
 *
 * @param props The Authors props
 * @returns The Authors page
 */
const Authors = (props: IAuthorsProps) => {
  const { authors } = props;
  return (
    <Layout>
      <Head>
        <title>Authors</title>
      </Head>
      <header className={homeStyles.header}>
        <h1>Authors</h1>
      </header>
      <article>
        {Object.keys(authors).map((key) => (
          <li key={key}>
            <Link href={`/author/${key}`}>
              <a>{key}</a>
            </Link>
          </li>
        ))}
      </article>
    </Layout>
  );
};

/**
 * Get the data for the page, this renders on build.
 *
 * @returns The props for the static pages
 */
export const getStaticProps: GetStaticProps = async () => {
  const authors = getAllAuthors();
  return {
    props: {
      authors,
    },
  };
};

export default Authors;
