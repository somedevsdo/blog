import { GetStaticProps } from "next";
import Head from "next/head";
import Author from "../components/Author/Author";
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
            <div>
              <Author
                author={postData.authorProfile}
                avatarBorder
                avatarSize="medium"
                colorScheme="dark"
                layout="horizontal"
              />
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
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
