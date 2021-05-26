import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import { getAllAuthors, IAuthor } from "../lib/authors";

interface IAuthorsProps {
  authors: IAuthor[];
}

/**
 * The author list page component.
 *
 * @param props The Authors props
 * @returns The Authors page
 */
const Authors = (props: IAuthorsProps): JSX.Element => {
  const { authors } = props;
  return (
    <Layout>
      <Head>
        <title>Authors</title>
      </Head>
      <header>
        <h1>Authors</h1>
      </header>
      <main>
        <article>
          <ul>
            {authors.map((author) => (
              <li key={author.id}>
                <Link href={`/author/${author.id}`}>
                  <a>{author.name}</a>
                </Link>
              </li>
            ))}
            {/* {Object.keys(authors).map((key) => (
              <li key={key}>
                <Link href={`/author/${key}`}>
                  <a>{key}</a>
                </Link>
              </li>
            ))} */}
          </ul>
        </article>
      </main>
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
