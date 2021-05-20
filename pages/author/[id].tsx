import Layout from "../../components/Layout/layout";
import Head from "next/head";
import Image from "next/image";
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
        {author.profile ? (
          <Image src={author.profile} alt={author.name} width={200} height={200} />
        ) : (
          ""
        )}

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
