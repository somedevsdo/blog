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
function MyApp({ Component, pageProps }: IAppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
