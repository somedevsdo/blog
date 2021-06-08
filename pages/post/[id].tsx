import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";
import React from "react";
import rehypePrism from "@mapbox/rehype-prism";
import html from "rehype-stringify";
import parse from "rehype-parse";
import { IAuthor } from "../../lib/authors";
import Subheader from "../../components/Subheader/Subheader";
import styles from "../../styles/Post.module.scss";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/Layout/Layout";
import Img from "../../components/Img/Img";
import ImageWithPlaceholder from "../../components/ImageWithPlaceholder/ImageWithPlaceholder";
import getDateFormatted from "../../lib/date";

/**
 * The definition of what a post contains.
 */
interface IPost {
  title: string;
  date: string;
  category: string;
  canonical: string;
  featuredImage: string;
  fileContents: string;
  authorProfile: IAuthor;
}

interface IPostProps {
  article: string;
  postData: IPost;
}

/**
 * The post page component. Uses the top level Layout.
 *
 * @param props The props for the post
 * @returns The Post component
 */
const Post = (props: IPostProps): JSX.Element => {
  const { article, postData } = props;

  const processor = unified()
    .use(parse, { fragment: true })
    .use(rehype2react, {
      createElement: React.createElement,
      components: { img: Img },
    });

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        {postData.canonical && <link href={postData.canonical} rel="canonical" />}
        <meta content="summary" name="twitter:card" />
        <meta content="somedevsdo" name="twitter:site" />
        <meta content={postData.authorProfile.name} name="twitter:creator" />
        <meta content={useRouter().asPath} property="og:url" />
        <meta content={postData.title} property="og:title" />
        <meta content={postData.title} property="og:description" />
        <meta content={`/posts/featured/${postData.featuredImage}`} property="og:image" />
      </Head>
      <header>
        <div className={styles.featuredImage}>
          <div className={styles.headerContainer}>
            <div className={styles.meta}>
              <div className={styles.catDate}>
                {postData.category} -{" "}
                <span className={styles.date}>{getDateFormatted(postData.date)}</span>
              </div>
              <h1 className={styles.title}>{postData.title}</h1>
            </div>
          </div>
          <ImageWithPlaceholder
            alt="Featured image"
            layout="fill"
            objectFit="cover"
            src={`/posts/featured/${postData.featuredImage}`}
          />
        </div>
        <Subheader
          author={postData.authorProfile}
          path={useRouter().asPath}
          title={postData.title}
        />
      </header>
      <main className={styles.container}>
        <article>{processor.processSync(article).result}</article>
        <div>
          {postData.canonical && (
            <p>
              <em>
                Originally published at{" "}
                <a href={postData.canonical}>{new URL(postData.canonical).hostname}</a>
              </em>
            </p>
          )}
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

  const processor = unified().use(markdown).use(remark2rehype).use(rehypePrism).use(html, {});

  const article = await processor.process(postData.fileContents);

  return {
    props: {
      article: article.toString(),
      postData,
    },
  };
};

export default Post;
