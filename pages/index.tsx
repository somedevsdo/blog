import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/Layout";
import { getSortedPostsData, IPost } from "../lib/posts";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder/ImageWithPlaceholder";
import styles from "../styles/Home.module.scss";
import Avatar from "../components/Avatar/Avatar";
import getDateFormatted from "../lib/date";

interface IHomeProps {
  allPostsData: IPost[];
}

const name = "somedevsdo";

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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
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
            <div className={styles.author}>
              <Avatar border size="medium" src="/authors/benmatselby.jpg" />
              <div className={styles.authorDetails}>
                <p>
                  by <strong>Ben Selby</strong>
                </p>
                <p>Senior</p>
              </div>
            </div>
          </div>
          <ImageWithPlaceholder
            alt="Featured image"
            layout="fill"
            objectFit="cover"
            src={`/posts/featured/${postData.featuredImage}`}
          />
        </div>
        <h1>{name}</h1>
        <ul>
          <li>
            <Link href="/about">
              <a data-testid="link-about">About us page</a>
            </Link>
          </li>
          <li>
            <Link href="/authors">
              <a data-testid="link-authors">Authors</a>
            </Link>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <ul data-testid="posts">
            {allPostsData.map(({ date, id, title }) => (
              <li key={id}>
                <Link href={`/post/${id}`}>
                  <a>
                    {title} ({date})
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
