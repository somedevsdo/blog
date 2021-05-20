import Layout from "../../components/layout";
import Head from "next/head";
import { getAllAuthorSlugs, getAuthorData } from "../../lib/authors";
import { GetStaticPaths, GetStaticProps } from "next";

/**
 * The author page component.
 */
export default function Author({ author }) {
  return (
    <Layout>
      <Head>
        <title>Authors</title>
      </Head>

      <article>
        <h1>{author.name}</h1>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllAuthorSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const author = await getAuthorData(params.id as string);
  return {
    props: {
      author,
    },
  };
};
