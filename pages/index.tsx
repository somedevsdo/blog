import { GetStaticProps } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/Layout";
import { getSortedPostsData, IPost } from "../lib/posts";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder/ImageWithPlaceholder";
import styles from "../styles/Home.module.scss";
import Avatar from "../components/Avatar/Avatar";
import getDateFormatted from "../lib/date";
import Card from "../components/Card/Card";

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
      </header>
      <main>
        <section>
          <ul className={styles.cards} data-testid="posts">
            {allPostsData.map((p: IPost) => (
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
  console.log(allPostsData[0].authorProfile);
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
