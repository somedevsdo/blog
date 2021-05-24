import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "../../styles/Post.module.scss";
import Avatar from "../../components/Avatar/Avatar";

interface IPost {
  title: string;
  date: string;
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
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <header>
        <div className={styles.featuredImage}>
          <Image
            alt="Featured image"
            layout="fill"
            objectFit="cover"
            src={`/posts/featured/${postData.featuredImage}`}
          />
        </div>
      </header>
      <main className={styles.container}>
        <article>
          <h1>{postData.title}</h1>
          <Avatar size="x-small" src="/authors/benmatselby.jpg" />
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
