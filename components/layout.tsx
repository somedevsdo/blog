import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import Link from "next/link";

const name = "[Insert amazing name here]";
export const siteTitle = "This could be the start of something new";

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image priority src="/images/profile.jpg" height={144} width={144} alt={name} />
            <h1>{name}</h1>
          </>
        ) : (
          <>Blog post</>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
