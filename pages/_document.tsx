import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = NextDocument.getInitialProps;
Document.renderDocument = NextDocument.renderDocument;

export default Document;
