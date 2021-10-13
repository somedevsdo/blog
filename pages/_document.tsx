import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const Document = (): JSX.Element => {
  const fontLink =
    "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=" +
    "Poppins:wght@700;900&display=swap";

  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href={fontLink} rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

Document.getInitialProps = NextDocument.getInitialProps;

export default Document;
