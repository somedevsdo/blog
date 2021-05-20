import "../styles/globals.scss";
import "prismjs/themes/prism-tomorrow.css";
import { ThemeProvider } from "next-themes";

interface IAppProps {
  Component: any;
  pageProps: any;
}

/**
 * @param root0
 * @param root0.Component
 * @param root0.pageProps
 */
const MyApp = ({ Component, pageProps }: IAppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
