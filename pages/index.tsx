import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/layout";
import { getSortedPostsData } from "../lib/posts";
import homeStyles from "../components/Layout/layout.module.scss";

const name = "[Insert amazing name here]";

/**
 * @param root0
 * @param root0.allPostsData
 */
const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <header className={homeStyles.header}>
      <h1>{name}</h1>
    </header>
    <main>
      <section>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
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

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
