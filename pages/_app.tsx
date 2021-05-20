import "../styles/globals.scss";
import "prismjs/themes/prism-tomorrow.css";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import React from "react";

/**
 * Our main component
 *
 * @param props The app props
 * @returns The App component
 */
const MyApp = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
