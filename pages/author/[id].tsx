import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout/Layout";
import { IAuthor, getAllAuthorSlugs, getAuthorData } from "../../lib/authors";
import Avatar from "../../components/Avatar/Avatar";
import SocialLink from "../../components/SocialLink/SocialLink";

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
          {author.profile ? <Avatar src={author.profile} /> : ""}
          <h1>{author.name}</h1>
          {author.social ? (
            <ul>
              {author.social.map((link) => (
                <li key={link}>
                  <SocialLink link={link} />
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
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
