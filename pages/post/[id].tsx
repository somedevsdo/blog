import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "../../styles/Post.module.scss";
import Subheader from "../../components/Subheader/Subheader";

interface IPost {
  title: string;
  date: string;
  category: string;
  featuredImage: string;
  contentHtml: string;
}

interface IPostProps {
  postData: IPost;
}

/**
 * The post page component. Uses the top level Layout.
 *
 * @param props The props for the post
 * @returns The Post component
 */
const Post = (props: IPostProps): JSX.Element => {
  const { postData } = props;

  const getDateFormatted = (): string => {
    return new Date(postData.date).toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <header>
        <div className={styles.featuredImage}>
          <div className={styles.headerContainer}>
            <div className={styles.meta}>
              <div className={styles.catDate}>
                {postData.category} - <span className={styles.date}>{getDateFormatted()}</span>
              </div>
              <h1 className={styles.title}>{postData.title}</h1>
            </div>
          </div>
          <Image
            alt="Featured image"
            layout="fill"
            objectFit="cover"
            src={`/posts/featured/${postData.featuredImage}`}
          />
        </div>
        <Subheader />
      </header>
      <main className={styles.container}>
        <article>
          <h1>{postData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
