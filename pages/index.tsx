import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/Layout";
import { getSortedPostsData } from "../lib/posts";
import homeStyles from "../components/Layout/Layout.module.scss";
import Avatar from "../components/Avatar/Avatar";

interface IPost {
  date: string;
  title: string;
  id: string;
}

interface IHomeProps {
  allPostsData: IPost[];
}

const name = "[Insert amazing name here]";

/**
 * The home page component
 *
 * @param props The home page props
 * @returns The home page component
 */
const Home = (props: IHomeProps): JSX.Element => {
  const { allPostsData } = props;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className={homeStyles.header}>
        <h1>{name}</h1>
        <Avatar size="small" src="/authors/benmatselby.jpg" />
        <Link href="/about">
          <a className={homeStyles.navLink}>About us page</a>
        </Link>
      </header>
      <main>
        <section>
          <ul>
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
