import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout/Layout";
import { IAuthor, getAllAuthorSlugs, getAuthorData } from "../../lib/authors";
import { getSortedPostsData, IPost } from "../../lib/posts";
import styles from "../../styles/Author.module.scss";
import Avatar from "../../components/Avatar/Avatar";
import Card from "../../components/Card/Card";
import SocialLink from "../../components/SocialLink/SocialLink";

interface IAuthorProps {
  author: IAuthor;
  allPostsData: IPost[];
}

/**
 * The author page component.
 *
 * @param props The props for the Author
 * @returns The Author component
 */
const Author = (props: IAuthorProps): JSX.Element => {
  const { allPostsData, author } = props;

  /**
   * We only want the author's most recent 3 posts
   *
   * @returns An array of posts
   */
  const filteredPosts = (): IPost[] => {
    return allPostsData.filter((p) => p.authorProfile.id === author.id).slice(0, 3);
  };

  return (
    <Layout>
      <Head>
        <title>{author.name} | somedevsdo</title>
      </Head>
      <div className={styles.hero} />
      <main>
        <article>
          <div className={styles.header}>
            <div className={styles.avatar}>
              {author.profilePicture ? <Avatar src={author.profilePicture} /> : ""}
            </div>
            <h1 className={styles.name}>{author.name}</h1>
            <h2 className={styles.role}>{author.role}</h2>
            {author.social && (
              <ul className={styles.socials}>
                {author.social.map((link) => (
                  <li key={link}>
                    <SocialLink link={link} />
                  </li>
                ))}
              </ul>
            )}
            <div className={styles.summary}>{author.summary}</div>
          </div>
          <h2 className={styles.latestTitle}>Latest posts</h2>
          <div className={styles.posts}>
            {filteredPosts().length ? (
              <ul className={styles.cards}>
                {filteredPosts().map((p: IPost) => (
                  <li key={p.id}>
                    <Card post={p} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className={styles.emptyState}>No posts yet</div>
            )}
          </div>
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
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      author,
      allPostsData,
    },
  };
};

export default Author;
