import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Avatar from "../components/Avatar/Avatar";
import Card from "../components/Card/Card";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder/ImageWithPlaceholder";
import Layout, { siteTitle } from "../components/Layout/Layout";
import getDateFormatted from "../lib/date";
import { getSortedPostsData, IPost } from "../lib/posts";
import styles from "../styles/Home.module.scss";

interface IHomeProps {
  allPostsData: IPost[];
}

/**
 * The home page component
 *
 * @param props The home page props
 * @returns The home page component
 */
const Home = (props: IHomeProps): JSX.Element => {
  const { allPostsData } = props;
  const postData = allPostsData[0];

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <div className={styles.hero}>
          <div className={styles.content}>
            <div className={styles.headerContainer}>
              <div className={styles.meta}>
                <span className={styles.category}>{postData.category}</span>
                <span className={styles.date}>{getDateFormatted(postData.date)}</span>
              </div>
              <h1 className={styles.title}>
                <Link href={`/post/${postData.id}`}>
                  <a>{postData.title}</a>
                </Link>
              </h1>
              <p className={styles.subtitle}>
                {postData.subtitle}...{" "}
                <Link href={`/post/${postData.id}`}>
                  <a title={postData.title}>read full post</a>
                </Link>
              </p>
              <div className={styles.author}>
                <Avatar size="small" src={postData.authorProfile.profilePicture} />
                <div>
                  <Link href={`/author/${postData.authorProfile.id}`}>
                    <a className={styles.name}>{postData.authorProfile.name}</a>
                  </Link>
                  <div>UI Developer</div>
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <Link href={`/post/${postData.id}`}>
                <a>
                  <ImageWithPlaceholder
                    alt="Featured image"
                    layout="fill"
                    objectFit="cover"
                    src={`/posts/featured/${postData.featuredImage}`}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <ul className={styles.cards} data-testid="posts">
            {allPostsData.slice(1).map((p: IPost) => (
              <li key={p.id}>
                <Card post={p} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
