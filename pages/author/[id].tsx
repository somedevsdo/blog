import Head from "next/head";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout/layout";
import { getAllAuthorSlugs, getAuthorData } from "../../lib/authors";

interface IAuthor {
  name: string;
  profile: string;
}

interface IAuthorProps {
  author: IAuthor;
}

/**
 * The author page component.
 *
 * @param props The props for the Author
 * @returns The Author component
 */
const Author = (props: IAuthorProps): JSX.Element => {
  const { author } = props;
  return (
    <Layout>
      <Head>
        <title>Authors</title>
      </Head>
      <main>
        <article>
          {author.profile ? (
            <Image src={author.profile} alt={author.name} width={200} height={200} />
          ) : (
            ""
          )}

          <h1>{author.name}</h1>
        </article>
      </main>
    </Layout>
  );
};

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

export default Author;
