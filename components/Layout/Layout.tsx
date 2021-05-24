import React from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import styles from "./Layout.module.scss";

export const siteTitle = "This could be the start of something new";

interface ILayoutProps {
  home?: boolean;
}

type Props = React.PropsWithChildren<ILayoutProps>;

/**
 * The standard Layout for the web app.
 *
 * @param props The props for the component
 * @returns The Layout component
 */
const Layout = (props: Props): JSX.Element => {
  const { children } = props;
  const { setTheme, theme } = useTheme();

  return (
    <div className={styles.container}>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <meta content={siteTitle} name="description" />
        <meta
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
            // eslint-disable-next-line max-len
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          property="og:image"
        />
        <meta content={siteTitle} name="og:title" />
        <meta content="summary_large_image" name="twitter:card" />
      </Head>
      <nav>
        <button onClick={(): void => setTheme(theme === "light" ? "dark" : "light")} type="button">
          Toggle theme
        </button>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
