import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import homeStyles from "../../components/Layout/Layout.module.scss";
import Avatar from "../../components/Avatar/Avatar";

interface IPost {
  title: string;
  date: string;
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
      <main>
        <article>
          <h1>{postData.title}</h1>
          <Avatar size="small" />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>

        <div className={homeStyles.backToHome}>
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
