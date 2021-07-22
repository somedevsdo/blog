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
import styles from "../../styles/Post.module.scss";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/Layout/Layout";
import Img from "../../components/Img/Img";
import ImageWithPlaceholder from "../../components/ImageWithPlaceholder/ImageWithPlaceholder";
import getDateFormatted from "../../lib/date";
import { generateOgImage } from "../../lib/generateOgImage";

/**
 * The definition of what a post contains.
 */
interface IPost {
  id: string;
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

  const externalEncodedPath: string = `https://somedevsdo.com${useRouter().asPath}`;

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
        <meta
          content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL || "somedevsdo.com"}/og/${
            postData.id
          }.png`}
          property="og:image"
        />
      </Head>
      <div className={styles.hero} />
      <div className={styles.container}>
        <header>
          <Link href="/">
            <a className={styles.homeLink}>← All posts</a>
          </Link>
          <div className={styles.featuredImage}>
            <ImageWithPlaceholder
              alt="Featured image"
              layout="fill"
              objectFit="cover"
              src={`/posts/featured/${postData.featuredImage}`}
            />
          </div>
        </header>
        <main className={styles.content}>
          <div className={styles.details}>
            <ul className={styles.shareList}>
              <li className={styles.shareItem}>
                <a
                  className={styles.shareAction}
                  href={`https://twitter.com/intent/tweet?url=${externalEncodedPath}&text=${encodeURIComponent(
                    postData.title
                  )}&via=somedevsdo`}
                  title="Share post to Twitter"
                >
                  <svg
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609
                1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127
                1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797
                6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108
                1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581
                4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07
                1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0
                14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <button
                  className={styles.shareAction}
                  onClick={(): Promise<void> => navigator.clipboard.writeText(externalEncodedPath)}
                  title="Copy post link to clipboard"
                  type="button"
                >
                  <svg
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745
                8.445 2.069l-2.246
                2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304
                4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74
                0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582
                2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929
                2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0
                1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74
                0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846
                1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648
                1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </li>
            </ul>

            <div className={styles.meta}>
              <span className={styles.category}>{postData.category}</span>
              <span className={styles.date}>{getDateFormatted(postData.date)}</span>
            </div>
          </div>

          <h1 className={styles.title}>{postData.title}</h1>
          <div className={styles.authorLink}>
            By{" "}
            <Link href={`/author/${postData.authorProfile.id}`}>
              <a>{postData.authorProfile.name}</a>
            </Link>
          </div>
          <article className={styles.article}>{processor.processSync(article).result}</article>
          <div>
            {postData.canonical && (
              <p>
                <em>
                  Originally published at{" "}
                  <a href={postData.canonical}>{new URL(postData.canonical).hostname}</a>
                </em>
              </p>
            )}
          </div>
        </main>
      </div>
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

  // this function will create the open graph image
  await generateOgImage({
    slug: postData.id,
    title: postData.title,
    avatar: postData.authorProfile.profilePicture,
    author: postData.authorProfile.name,
  });

  return {
    props: {
      article: article.toString(),
      postData,
    },
  };
};

export default Post;
