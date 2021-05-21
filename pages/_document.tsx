import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const Document = (): JSX.Element => (
  <Html lang="en">
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

Document.getInitialProps = NextDocument.getInitialProps;
Document.renderDocument = NextDocument.renderDocument;

export default Document;
